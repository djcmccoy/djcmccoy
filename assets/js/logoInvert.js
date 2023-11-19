document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", function() {
        // Add or remove the theme-invert-logo class based on the navbar's visibility
        themeToggle.classList.toggle("theme-invert-logo", !navbar.classList.contains("hidden"));
    });
});
