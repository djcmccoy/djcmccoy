// videoResizer.js

window.addEventListener('resize', function() {
    var video = document.getElementById('autoplay-video');
    var slider = document.querySelector('.cover-slider');
    video.style.height = slider.clientHeight + 'px';
});

// Trigger the resize event initially
window.dispatchEvent(new Event('resize'));
