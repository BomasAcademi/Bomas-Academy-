// JavaScript for any slider functionality or future interactivity can go here

// Example: Slide functionality for image carousel
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slides img');
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide();
    }, 3000); // Change slides every 3 seconds
});






function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    const hamburger = document.querySelector(".hamburger");
    
    // Toggle the "show" class on nav links
    navLinks.classList.toggle("show");
    
    // Toggle the "active" class on the hamburger to animate it
    hamburger.classList.toggle("active");
}






let currentSlideIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.jupeb-slides');
  const totalSlides = document.querySelectorAll('.jupeb-slides img').length;
  
  currentSlideIndex += direction;
  
  // Loop back to the first slide if we're at the end
  if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
  }
  
  // Loop to the last slide if we're at the beginning
  if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;
  }
  
  // Move the slides
  slides.style.transform = `translateX(-${currentSlideIndex * 270}px)`; // Adjust width based on your images
}