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
      addCustomWebsiteToUI(hostname, data.customWebsites[hostname]);
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
      chrome.storage.sync.set({ websiteBlockerStates: websiteBlockerStates }, function() {
        // No need to reload or send a message to the content script here
      });
    });
  });
}

// Function to add custom website to UI
function addCustomWebsiteToUI(hostname, label) {
  const customWebsitesDiv = document.getElementById('customWebsites');
  const websiteDiv = document.createElement('div');
  websiteDiv.className = 'switch';
  websiteDiv.innerHTML = `
    <label>
      ${label}:
      <input type="checkbox" id="custom_${hostname}">
    </label>
    <button class="removeCustomWebsiteButton" data-hostname="${hostname}">Remove</button>
  `;
  customWebsitesDiv.appendChild(websiteDiv);

  document.getElementById(`custom_${hostname}`).addEventListener('change', function() {
    chrome.storage.sync.get('websiteBlockerStates', function(data) {
      const websiteBlockerStates = data.websiteBlockerStates || {};
      websiteBlockerStates[hostname] = document.getElementById(`custom_${hostname}`).checked;
      chrome.storage.sync.set({ websiteBlockerStates: websiteBlockerStates }, function() {
        // No need to reload or send a message to the content script here
      });
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
  const hostname = customWebsiteInput.value.trim();
  if (hostname) {
    chrome.storage.sync.get('customWebsites', function(data) {
      const customWebsites = data.customWebsites || {};
      customWebsites[hostname] = hostname;
      chrome.storage.sync.set({ customWebsites: customWebsites }, function() {
        addCustomWebsiteToUI(hostname, hostname);
        customWebsiteInput.value = '';
      });
    });
  }
});
