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

// Handle the download button click in the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "downloadImages") {
    // Get all the <img> elements on the webpage
    const imageElements = document.getElementsByTagName("img");

    // Loop through the image elements
    for (let i = 0; i < imageElements.length; i++) {
      const imgElement = imageElements[i];
      const imageUrl = imgElement.src;
      const fileName = `image${i}.jpg`;

      // Add a click event listener to trigger the download
      imgElement.addEventListener("click", function () {
        downloadImage(imageUrl, fileName);

        // Remove the click event listener after download
        imgElement.removeEventListener("click", arguments.callee);
      });
    }
  }
});
