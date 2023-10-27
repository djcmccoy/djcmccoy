document.addEventListener("DOMContentLoaded", function() {
    // Get theme from local storage
    const savedTheme = localStorage.getItem("theme");

    // If there's a saved theme, use it. Otherwise, default to 'dark'
    document.body.dataset.theme = savedTheme ? savedTheme : "dark";
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function() {
    // Toggle theme
    if (document.body.dataset.theme === "dark") {
        document.body.dataset.theme = "light";
        localStorage.setItem("theme", "light");
    } else {
        document.body.dataset.theme = "dark";
        localStorage.setItem("theme", "dark");
    }
});
