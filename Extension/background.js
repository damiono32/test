// background.js

// Listen for new tabs.
chrome.tabs.onCreated.addListener(function (tab) {
  if (tab.pendingUrl === "chrome://newtab/" || tab.pendingUrl === "edge://newtab/") {
    chrome.tabs.update(tab.id, {url:'https://webwidgets.netlify.app/'});
  }

  // Only redirect if this is a blank new tab (not opened by clicking a link).
 
});




chrome.topSites.get(function (data) {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    // Callback for that request
    sendResponse({ message: data });
    
});
 })


 // Don't Mind me just testing stuffdb
   
 chrome.runtime.onMessage.addListener((message, callback) => {
  if (message == "runContentScript"){
    chrome.scripting.executeScript({
      file: 'widget.js'
    });
  }
});


