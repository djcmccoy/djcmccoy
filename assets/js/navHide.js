document.addEventListener("DOMContentLoaded", function() {
    var dropdownNav = document.querySelector(".dropdown-nav");
    var logo = dropdownNav.querySelector(".logo-link"); // Reference to the logo within dropdown-nav
    var themeToggle = document.getElementById("themeToggle");
    var hamburgerButton = document.getElementById("hamburgerButton");

    hamburgerButton.addEventListener("click", function() {
        // Toggle 'fade-out' class for logo and theme toggle
        logo.classList.toggle("fade-out");
        themeToggle.classList.toggle("fade-out");

        // Toggle 'background-fade-out' class for the entire dropdown-nav
        dropdownNav.classList.toggle("background-fade-out");
    });
});
