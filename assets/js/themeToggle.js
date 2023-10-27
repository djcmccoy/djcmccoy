document.addEventListener("DOMContentLoaded", function() {

    // Get the theme toggle element
    const themeToggle = document.getElementById('themeToggle');

    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    // If there's a theme saved in local storage, set it
    if (currentTheme) {
        document.body.setAttribute('data-theme', currentTheme);
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', function() {
        let theme = 'light';
        if (document.body.getAttribute('data-theme') === 'light') {
            theme = 'dark';
        }
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
});
