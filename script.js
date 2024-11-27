// Modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
