// Array of image URLs
const imageUrls = [
    'img/u(1).jpg',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/700'
];

// Populate the gallery dynamically
const gallery = document.querySelector('.gallery');

imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Gallery Image';
    gallery.appendChild(img);
});

// Modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        modal.style.display = 'block';
        modalImg.src = e.target.src;
    }
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
