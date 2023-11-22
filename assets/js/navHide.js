document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var logo = navbar.querySelector(".logo-link"); // Reference to the logo
    var themeToggle = document.getElementById("themeToggle");
    var hamburgerButton = document.getElementById("hamburgerButton");

    hamburgerButton.addEventListener("click", function() {
        // Toggle 'fade-out' class for navbar, logo, and theme toggle
        navbar.classList.toggle("fade-out");
        logo.classList.toggle("fade-out");
        themeToggle.classList.toggle("fade-out");
    });
});
