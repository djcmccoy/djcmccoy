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


/* SWIPER */

document.getElementById('themeToggle').addEventListener('click', function() {
    let currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        // Set light theme styles for the button
        updateSwiperPaginationBulletActiveColor('#ColorForLightTheme'); 
    } else {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        // Set dark theme styles for the button
        updateSwiperPaginationBulletActiveColor('#110f10'); 
    }
});

// On page load, set the theme from local storage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    updateSwiperPaginationBulletActiveColor('#110f10');
} else {
    // Ensure light theme styles are set
    updateSwiperPaginationBulletActiveColor('#ColorForLightTheme');
}

function updateSwiperPaginationBulletActiveColor(color) {
    var elements = document.querySelectorAll('.swiper-pagination-bullet-active');
    elements.forEach(function(element) {
        element.style.background = color;
    });
}
