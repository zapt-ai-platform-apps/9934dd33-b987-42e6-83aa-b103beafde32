importScripts("https://progressier.app/z8yY3IKmfpDIw3mSncPh/sw.js");

// Static Image Replacement
document.querySelectorAll('img[data-image-request]').forEach(img => {
  const prompt = img.getAttribute('data-image-request');
  // Assuming a backend service replaces src based on prompt
  fetch(`/api/generate-image?prompt=${encodeURIComponent(prompt)}`)
    .then(response => response.json())
    .then(data => {
      img.src = data.url;
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
});