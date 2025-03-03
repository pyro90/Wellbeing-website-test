const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");
const body = document.body;

slider.addEventListener("input", () => {
    const percentage = slider.value; // Slider value from 0 to 100

    // Directly update body's background position
    body.style.backgroundPosition = `${percentage}% 50%`;

    // Update text feedback dynamically
    if (percentage < 20) {
        sliderValue.textContent = "Anxious";
    } else if (percentage < 50) {
        sliderValue.textContent = "Sad";
    } else if (percentage < 75) {
        sliderValue.textContent = "Alright";
    } else if (percentage < 100) {
        sliderValue.textContent = "Good";
    } else {
        sliderValue.textContent = "Excellent";
    }
});
