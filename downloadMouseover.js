// content.js

// Function to handle the download of an image
function downloadImage(imageUrl, fileName) {
    const downloadLink = document.createElement("a");
    downloadLink.href = imageUrl;
    downloadLink.download = fileName;
    downloadLink.style.display = "none"; // Hide the link
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  
  // Function to handle the mouseover event for downloading an image once
  function handleMouseOverDownload(imgElement, imageUrl, fileName) {
    const handleMouseOver = function () {
      downloadImage(imageUrl, fileName);
      imgElement.removeEventListener("mouseover", handleMouseOver);
    };
    imgElement.addEventListener("mouseover", handleMouseOver);
  }
  
  // Handle the download button click in the popup
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "downloadMouseover") {
      // Get all the <img> elements on the webpage
      const imageElements = document.getElementsByTagName("img");
  
      // Loop through the image elements
      for (let i = 0; i < imageElements.length; i++) {
        const imgElement = imageElements[i];
        const imageUrl = imgElement.src;
        const fileName = `image${i}.jpg`;
  
        // Add a mouseover event to trigger the download once
        handleMouseOverDownload(imgElement, imageUrl, fileName);
      }
    }
  });
  