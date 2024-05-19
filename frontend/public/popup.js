document.getElementById('toggleButton').addEventListener('click', function() {
    chrome.storage.sync.get('blockerEnabled', function(data) {
      const blockerEnabled = !data.blockerEnabled;
      chrome.storage.sync.set({ blockerEnabled: blockerEnabled }, function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleBlocker', enabled: blockerEnabled }, function(response) {
            // Update button text and status immediately
            document.getElementById('toggleButton').textContent = blockerEnabled ? 'Toggle OFF' : 'Toggle ON';
            document.getElementById('blockStatus').textContent = blockerEnabled ? 'ON' : 'OFF';
          });
        });
      });
    });
  });
  
  // Initialize the button state
  chrome.storage.sync.get('blockerEnabled', function(data) {
    const blockerEnabled = data.blockerEnabled || false;
    document.getElementById('toggleButton').textContent = blockerEnabled ? 'Toggle OFF' : 'Toggle ON';
    document.getElementById('blockStatus').textContent = blockerEnabled ? 'ON' : 'OFF';
  });
  