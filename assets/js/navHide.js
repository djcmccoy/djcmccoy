document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var menu = document.getElementById("menu"); // Assuming you have a menu element
    var hamburgerButton = document.querySelector(".hamburger");
    var themeToggle = document.getElementById("themeToggle");

    hamburgerButton.addEventListener("click", function() {
        navbar.classList.toggle("hidden");
        menu.classList.toggle("active"); // Toggle the visibility or position of the menu

        // Add or remove the theme-invert class based on the navbar's visibility
        themeToggle.classList.toggle("theme-invert", !navbar.classList.contains("hidden"));
    });
});
