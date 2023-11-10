// popup.js

document.getElementById("downloadImages").addEventListener("click", function() 
{
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "downloadImages" });
  });

});


document.getElementById("downloadAll").addEventListener("click", function() 
{
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "downloadAll" });
      });
});


document.getElementById("downloadMouseover").addEventListener("click", function() 
{
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "downloadMouseover" });
      });
});

 





  
  
    
    
    
    
 