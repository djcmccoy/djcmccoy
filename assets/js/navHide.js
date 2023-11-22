document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var hamburgerButton = document.getElementById("hamburgerButton");
    var themeToggle = document.getElementById("themeToggle");

    hamburgerButton.addEventListener("click", function() {
        if (navbar.style.opacity === "0") {
            navbar.style.opacity = "1"; // Show the navbar
        } else {
            navbar.style.opacity = "0"; // Hide (fade out) the navbar
        }

        // Optional: Adjust the theme-invert class toggle as needed
        themeToggle.classList.toggle("theme-invert", navbar.style.opacity !== "0");
    });
});
