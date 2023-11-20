// On page load, set the theme from local storage
if (localStorage.getItem('theme')) {
    document.body.dataset.theme = localStorage.getItem('theme');
}

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function () {
    let currentTheme = document.body.dataset.theme;

    if (currentTheme === 'dark') {
        document.body.dataset.theme = 'light';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark');
    }

    // Add this section for smooth transition
    themeToggle.style.pointerEvents = 'none';
    setTimeout(() => {
        themeToggle.style.pointerEvents = 'auto';
    }, 1000); // Adjust the delay as needed
});
