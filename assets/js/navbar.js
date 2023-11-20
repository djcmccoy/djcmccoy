const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menu = document.querySelector('.menu');

themeToggle.addEventListener('click', function () {
    let currentTheme = body.dataset.theme;

    if (currentTheme === 'dark') {
        body.dataset.theme = 'light';
        localStorage.setItem('theme', 'light');
    } else {
        body.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark');
    }
    updateLogoClass();
});

document.querySelector('.hamburger').addEventListener('click', function () {
    body.classList.toggle('menu-open');
    updateLogoClass();
});

function updateLogoClass() {
    const currentTheme = body.dataset.theme;
    const isMenuOpen = body.classList.contains('menu-open');
    const logo = document.querySelector('.logotype');

    if (currentTheme === 'dark' && isMenuOpen) {
        logo.classList.remove('theme-invert');
    } else {
        logo.classList.add('theme-invert');
    }
}
