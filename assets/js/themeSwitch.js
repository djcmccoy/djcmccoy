<script>
document.getElementById('themeToggle').addEventListener('click', function(event) {
    event.preventDefault();
    
    let body = document.body;
    let icon = document.getElementById('themeToggle');
    
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        icon.textContent = '☀️';
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        icon.textContent = '🌙';
    }
});
</script>
