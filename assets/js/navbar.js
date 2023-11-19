document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var hamburgerButton = document.querySelector(".hamburger");
    var themeToggle = document.getElementById("themeToggle");

    hamburgerButton.addEventListener("click", function(e) {
        // Check if the clicked element is the hamburger button
        if (!e.target.classList.contains("hamburger__inner")) {
            // Toggle the hidden class for the navbar if the click is not on the hamburger__inner
            navbar.classList.toggle("hidden");
        }
    });

    themeToggle.addEventListener("click", function() {
        // Add or remove the theme-invert-logo class based on the navbar's visibility
        themeToggle.classList.toggle("theme-invert-logo", !navbar.classList.contains("hidden"));
    });
});
