// On page load, set the theme from local storage
if (localStorage.getItem('theme')) {
    document.body.dataset.theme = localStorage.getItem('theme');
}

document.getElementById('themeToggle').addEventListener('click', function() {
    let currentTheme = document.body.dataset.theme;

    if (currentTheme === 'dark') {
        document.body.dataset.theme = 'light';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark');
    }
});

// Add the following code to hide the theme toggle when the menu is open
document.querySelector('.hamburger').addEventListener('click', function() {
    document.body.classList.toggle('menu-open');

    // You may want to add additional logic to handle other aspects of your menu
    // ...

    // Add or remove the class on the theme toggle button based on menu state
    document.getElementById('themeToggle').classList.toggle('menu-open', document.body.classList.contains('menu-open'));
});
