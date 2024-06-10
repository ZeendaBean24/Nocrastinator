document.getElementById('masterToggleButton').addEventListener('click', function() {
  chrome.storage.sync.get('blockerEnabled', function(data) {
    const blockerEnabled = !data.blockerEnabled;
    chrome.storage.sync.set({ blockerEnabled: blockerEnabled }, function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleBlocker', enabled: blockerEnabled }, function(response) {
          // Update button text and status immediately
          document.getElementById('masterToggleButton').textContent = blockerEnabled ? 'Toggle OFF' : 'Toggle ON';
          document.getElementById('blockStatus').textContent = blockerEnabled ? 'ON' : 'OFF';
          document.getElementById('overrideText').style.display = blockerEnabled ? 'block' : 'none';

          // Disable individual switches when master switch is on
          for (const switchId in websiteSwitches) {
            document.getElementById(switchId).disabled = blockerEnabled;
          }
          // Disable custom website switches when master switch is on
          const customSwitches = document.querySelectorAll('.customSwitch');
          customSwitches.forEach(switchElement => {
            switchElement.disabled = blockerEnabled;
          });
        });
      });
    });
  });
});

// Initialize the button state
chrome.storage.sync.get(['blockerEnabled', 'websiteBlockerStates', 'customWebsites'], function(data) {
  const blockerEnabled = data.blockerEnabled || false;
  document.getElementById('masterToggleButton').textContent = blockerEnabled ? 'Toggle OFF' : 'Toggle ON';
  document.getElementById('blockStatus').textContent = blockerEnabled ? 'ON' : 'OFF';
  document.getElementById('overrideText').style.display = blockerEnabled ? 'block' : 'none';

  for (const switchId in websiteSwitches) {
    const switchElement = document.getElementById(switchId);
    switchElement.disabled = blockerEnabled;
    if (data.websiteBlockerStates) {
      switchElement.checked = data.websiteBlockerStates[websiteSwitches[switchId]] || false;
    }
  }

  if (data.customWebsites) {
    for (const hostname in data.customWebsites) {
      addCustomWebsiteToUI(hostname, data.customWebsites[hostname], blockerEnabled, data.websiteBlockerStates);
    }
  }
});

// Website switches configuration
const websiteSwitches = {
  youtubeSwitch: "www.youtube.com",
  facebookSwitch: "www.facebook.com",
  netflixSwitch: "www.netflix.com",
  robloxSwitch: "www.roblox.com",
  discordSwitch: "discord.com",
  instagramSwitch: "www.instagram.com",
  snapchatSwitch: "web.snapchat.com",
  redditSwitch: "www.reddit.com",
  twitterSwitch: "x.com"
};

// Add event listeners to individual switches
for (const switchId in websiteSwitches) {
  const switchElement = document.getElementById(switchId);
  switchElement.addEventListener('change', function() {
    chrome.storage.sync.get('websiteBlockerStates', function(data) {
      const websiteBlockerStates = data.websiteBlockerStates || {};
      websiteBlockerStates[websiteSwitches[switchId]] = switchElement.checked;
      chrome.storage.sync.set({ websiteBlockerStates: websiteBlockerStates });
    });
  });
}

// Function to add custom website to UI
function addCustomWebsiteToUI(hostname, label, blockerEnabled, websiteBlockerStates) {
  const checkboxGridDiv = document.getElementById('individualSwitches');
  const websiteDiv = document.createElement('div');
  websiteDiv.className = 'switch';
  websiteDiv.innerHTML = `
    <label class="switch">
      <span>${label}:</span>
      <input type="checkbox" id="custom_${hostname}" class="customSwitch checkbox">
    </label>
    <button class="button removeCustomWebsiteButton" data-hostname="${hostname}">Remove</button>
  `;
  checkboxGridDiv.appendChild(websiteDiv);

  const customSwitch = document.getElementById(`custom_${hostname}`);
  customSwitch.checked = websiteBlockerStates && websiteBlockerStates[hostname] || false;
  customSwitch.disabled = blockerEnabled;

  customSwitch.addEventListener('change', function() {
    chrome.storage.sync.get('websiteBlockerStates', function(data) {
      const websiteBlockerStates = data.websiteBlockerStates || {};
      websiteBlockerStates[hostname] = customSwitch.checked;
      chrome.storage.sync.set({ websiteBlockerStates: websiteBlockerStates });
    });
  });

  document.querySelector(`.removeCustomWebsiteButton[data-hostname="${hostname}"]`).addEventListener('click', function() {
    chrome.storage.sync.get(['customWebsites', 'websiteBlockerStates'], function(data) {
      const customWebsites = data.customWebsites || {};
      const websiteBlockerStates = data.websiteBlockerStates || {};
      delete customWebsites[hostname];
      delete websiteBlockerStates[hostname];
      chrome.storage.sync.set({ customWebsites: customWebsites, websiteBlockerStates: websiteBlockerStates }, function() {
        websiteDiv.remove();
      });
    });
  });
}


// Add custom website
document.getElementById('addCustomWebsiteButton').addEventListener('click', function() {
  const customWebsiteInput = document.getElementById('customWebsiteInput');
  const customWebsiteNameInput = document.getElementById('customWebsiteNameInput');
  const hostname = customWebsiteInput.value.trim();
  const websiteName = customWebsiteNameInput.value.trim();
  if (hostname && websiteName) {
    // if (!/^www\./.test(hostname)) {
    //   alert("Please ensure the website URL starts with 'www.'");
    //   return;
    // }
    chrome.storage.sync.get('customWebsites', function(data) {
      const customWebsites = data.customWebsites || {};
      customWebsites[hostname] = websiteName;
      chrome.storage.sync.set({ customWebsites: customWebsites }, function() {
        addCustomWebsiteToUI(hostname, websiteName, document.getElementById('masterToggleButton').textContent === 'Toggle OFF', {});
        customWebsiteInput.value = '';
        customWebsiteNameInput.value = '';
      });
    });
  } else {
    alert("Please enter both a valid website URL and a name.");
  }
});
