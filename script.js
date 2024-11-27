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

// Show Details and Delete functionality
document.querySelectorAll('.image-container').forEach(container => {
    const showDetailsBtn = container.querySelector('.show-details');
    const deleteBtn = container.querySelector('.delete');
    const img = container.querySelector('img');

    // Show Details functionality
    showDetailsBtn.addEventListener('click', () => {
        alert(`Image Details\nName: ${img.alt} \nSize: 1280 X 720`);
    });

    // Delete functionality
    deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this image?')) {
            container.remove();
        }
    });
});
