document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle between light and dark theme
    function toggleTheme() {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Event listener for theme toggle button
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);

    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
