document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var hamburgerButton = document.querySelector(".hamburger");

    hamburgerButton.addEventListener("click", function() {
        navbar.classList.toggle("hidden");
    });
});
