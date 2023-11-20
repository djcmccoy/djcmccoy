document.getElementById('themeToggle').addEventListener('click', function () {
    let currentTheme = document.body.dataset.theme;

    if (currentTheme === 'dark') {
        document.body.dataset.theme = 'light';
        document.body.dataset.menuOpen === 'true' ? document.body.dataset.logoInvert = 'light' : document.body.dataset.logoInvert = 'dark';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.dataset.theme = 'dark';
        document.body.dataset.menuOpen === 'true' ? document.body.dataset.logoInvert = 'dark' : document.body.dataset.logoInvert = 'light';
        localStorage.setItem('theme', 'dark');
    }
});

document.querySelector('.hamburger').addEventListener('click', function () {
    document.body.dataset.menuOpen = (document.body.dataset.menuOpen !== 'true').toString();
});
