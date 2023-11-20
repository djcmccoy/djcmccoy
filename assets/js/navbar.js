// On page load, set the theme from local storage
if (localStorage.getItem('theme')) {
    document.body.dataset.theme = localStorage.getItem('theme');
}

document.getElementById('themeToggle').addEventListener('click', function () {
    let currentTheme = document.body.dataset.theme;

    if (currentTheme === 'dark') {
        document.body.dataset.theme = 'light';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark');
    }
});

document.querySelector('.hamburger').addEventListener('click', function () {
    document.body.dataset.menuOpen = (document.body.dataset.menuOpen !== 'true').toString();
});
