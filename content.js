console.log("CF Modifier is running");

// Function to update the canvas background
function updateCanvasBackground() {
  const canvas = document.getElementById("problemRatingChart");
  if (canvas) {
    console.log("Canvas found, changing background.");
    canvas.style.backgroundImage = "url('https://i.redd.it/y2julru7g0871.jpg')";
    canvas.style.backgroundSize = "cover";
    canvas.style.backgroundPosition = "center";

    document.documentElement.style.setProperty('--border-radius', '18px');
   
    
  
  } else {
    console.log("Canvas not found, waiting...");
  }
}


// Create a MutationObserver to detect when the canvas loads
const observer = new MutationObserver((mutations, obs) => {
  updateCanvasBackground(); // Attempt to update the background
  const canvas = document.getElementById("problemRatingChart");
  if (canvas) {
    obs.disconnect(); // Stop observing once the element is found and updated
  }
});

// Start observing the entire body for changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});
