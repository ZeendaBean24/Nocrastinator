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
chrome.storage.sync.get(['blockerEnabled', 'websiteBlockerStates'], function(data) {
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
