window.addEventListener('resize', function() {
    var video = document.getElementById('responsive-video');
    // Set the height relative to the viewport height
    video.style.height = window.innerHeight + 'px';
    // Set the width relative to the viewport width
    video.style.width = window.innerWidth + 'px';
});

// Trigger the resize event initially
window.dispatchEvent(new Event('resize'));
