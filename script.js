function recommendCrop() {
    const district = document.getElementById('district').value;
    const initialCrop = document.getElementById('initialCrop').value;
    let recommendedCrop = "Unknown";

    // Your recommendation logic here
    // For example:
    if (district !== "-Select-" && initialCrop !== "-Select-") {
        recommendedCrop = Based on ${district} and ${initialCrop}, we recommend trying Rice or Maize.;
    } else {
        recommendedCrop = "Please select both a district and an initial crop.";
    }

    // Display the recommendation with a fade-in effect
    const cropNameElement = document.getElementById('cropName');
    cropNameElement.style.opacity = 0;
    cropNameElement.innerText = recommendedCrop;
    
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            cropNameElement.style.opacity = opacity;
        } else {
            clearInterval(fadeIn);
        }
    }, 50);
}

// Parallax effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});