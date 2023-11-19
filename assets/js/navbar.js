document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var hamburgerButton = document.querySelector(".hamburger");
    var themeToggle = document.getElementById("themeToggle");
    var menu = document.querySelector(".menu");

    hamburgerButton.addEventListener("click", function(e) {
        // Check if the clicked element is the hamburger button
        if (!e.target.classList.contains("hamburger__inner")) {
            // Toggle the hidden class for the navbar if the click is not on the hamburger__inner
            navbar.classList.toggle("hidden");
            // Toggle the hidden class for the menu
            menu.classList.toggle("hidden");

            // After a short delay, check the navbar visibility and update theme toggle
            setTimeout(function() {
                if (navbar.classList.contains("hidden")) {
                    themeToggle.classList.add("theme-invert-logo");
                } else {
                    themeToggle.classList.remove("theme-invert-logo");
                }
            }, 100); // Adjust the delay as needed
        }
    });

    themeToggle.addEventListener("click", function() {
        // Check if the navbar is hidden
        if (navbar.classList.contains("hidden")) {
            // Add the theme-invert-logo class if the navbar is hidden
            themeToggle.classList.add("theme-invert-logo");
        } else {
            // Remove the theme-invert-logo class if the navbar is visible
            themeToggle.classList.remove("theme-invert-logo");
        }
    });

    // Ensure the theme-invert-logo class is not present initially
    themeToggle.classList.remove("theme-invert-logo");
});