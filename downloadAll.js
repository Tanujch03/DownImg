// content.js

// Handle the download button click in the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "downloadAll") {
      // Get all the <img> elements on the webpage
      const imageElements = document.getElementsByTagName("img");
      
      // Loop through the image elements
      for (let i = 0; i < imageElements.length; i++) {
        const imgElement = imageElements[i];
        const imageUrl = imgElement.src;
        
        // Create a link (a tag) with the image URL as the download link
        const downloadLink = document.createElement("a");
        downloadLink.href = imageUrl;
        downloadLink.download = `image${i}.jpg`; // You can specify the filename here
        
        // Simulate a click on the download link to trigger the download
        downloadLink.click();
      }
    }
  });