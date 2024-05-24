document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('mouseover', () => {
        container.classList.add('zoomed');
    });

    container.addEventListener('mouseout', () => {
        container.classList.remove('zoomed');
    });
});
