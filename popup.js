// popup.js

function clickHandler() {
  // Remove the click event listener
  document.getElementById("downloadImages").removeEventListener("click", clickHandler);

  // Send the message to download images
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "downloadImages" });
  });
}

document.getElementById("downloadImages").addEventListener("click", clickHandler);


  document.getElementById("downloadAll").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "downloadAll" });
    });
  });
  
  
  document.getElementById("downloadMouseover").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "downloadMouseover" });
    });
  });








