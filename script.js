// Simple fade-in animation
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hero-page").style.opacity = "1";
    document.querySelector(".hero-page").style.transform = "translateY(0)";
});

const slider = document.getElementById("loopSlider");

slider.addEventListener("scroll", () => {
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
    }
});


const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});
