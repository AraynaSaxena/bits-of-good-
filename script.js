function showNgoDetails() {
    const ngoDetails = document.getElementById('ngo-details');
    if (ngoDetails.classList.contains('hidden')) {
        ngoDetails.classList.remove('hidden');
    } else {
        ngoDetails.classList.add('hidden');
    }
}

let currentImageIndex = 0;

function updateSwiperImages() {
    const images = document.querySelectorAll('.swiper-image');
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentImageIndex) {
            img.classList.add('active');
        }
    });
}

function prevImage() {
    const images = document.querySelectorAll('.swiper-image');
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateSwiperImages();
}

function nextImage() {
    const images = document.querySelectorAll('.swiper-image');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateSwiperImages();
}

// Initialize swiper
updateSwiperImages();
