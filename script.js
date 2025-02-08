function recommendCrop() {
    // Get selected values
    const district = document.getElementById('district').value;
    const initialCrop = document.getElementById('initialCrop').value;

    // Basic recommendation logic (replace with your model)
    let recommendedCrop = "Unknown";

    if (district === 'Chengalpattu') {
        if (initialCrop === 'wheat') {
            recommendedCrop = "Soybean (for rotation)";
        } else if (initialCrop === 'soybean') {
            recommendedCrop = "Corn";
        } else {
            recommendedCrop = "Wheat or Canola";
        }
    } else {
        recommendedCrop = "Connecting soon.";
    }

    // Display the recommendation
    document.getElementById('cropName').innerText = recommendedCrop;

    document.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;
      
        // Adjust the transform property of each layer based on the scroll position
        document.querySelector('.parallax-layer:nth-child(1)').style.transform = 'translateY(' + (-scrollPosition * 0.5) + 'px)';
        document.querySelector('.parallax-layer:nth-child(2)').style.transform = 'translateY(' + (-scrollPosition * 0.8) + 'px)';
      
        // Add more layers and adjust the multiplier as needed
      });
}