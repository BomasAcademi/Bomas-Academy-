// Toggle the 'show' class to slide in/out the menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');

    // Toggle visibility of the nav links
    navLinks.classList.toggle('show');
    
    // Toggle hamburger animation
    hamburger.classList.toggle('active');
}

// Close the menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.remove('show');
        document.querySelector('.hamburger').classList.remove('active');
    });
});









// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to add the class "in-view" when element is in viewport
function checkScroll() {
    const elements = document.querySelectorAll('.hidden');
    
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('in-view');
        }
    });
}

// Listen for the scroll event to check when the elements come into view
window.addEventListener('scroll', checkScroll);

// Initial check when the page is loaded
window.addEventListener('load', checkScroll);


// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show the button when the user scrolls down 200px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});