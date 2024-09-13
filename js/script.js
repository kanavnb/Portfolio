document.addEventListener("DOMContentLoaded", function() {
    const avatar = document.querySelector('.avatar');
    avatar.addEventListener('mouseover', function() {
        avatar.style.transform = 'scale(1.1)';
        avatar.style.transition = 'transform 0.3s ease';
    });

    avatar.addEventListener('mouseout', function() {
        avatar.style.transform = 'scale(1)';
    });
});
