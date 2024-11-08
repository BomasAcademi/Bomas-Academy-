document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('nav-links');

    // Function to toggle the menu
    function toggleMenu() {
        // Toggle the "show" class to display/hide the menu
        navLinks.classList.toggle('show');

        // Toggle the "active" class to animate the hamburger
        hamburger.classList.toggle('active');
    }

    // Add event listener to the hamburger to toggle the menu on click
    hamburger.addEventListener('click', toggleMenu);

    // Back-to-Top button functionality
    const backToTopButton = document.getElementById("backToTop");

    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});