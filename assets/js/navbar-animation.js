document.addEventListener("DOMContentLoaded", function() {
    // Get the menu button and the navbar
    const menuBtn = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");

    // Add click event listener to the menu button
    menuBtn.addEventListener("click", function() {
        // Toggle the 'hidden' class on the navbar
        navbar.classList.toggle("hidden");
    });
});
