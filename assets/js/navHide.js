document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var hamburgerButton = document.querySelector(".hamburger");
    var themeToggle = document.getElementById("themeToggle");

    hamburgerButton.addEventListener("click", function() {
        navbar.classList.toggle("hidden");
        // Add or remove the theme-invert class based on the navbar's visibility
        themeToggle.classList.toggle("theme-invert", !navbar.classList.contains("hidden"));
    });
});
