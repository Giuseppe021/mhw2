
const carouselImages = document.querySelector('.carousel-images');
const carouselArrowLeft = document.querySelector('.carousel-arrow-left');
const carouselArrowRight = document.querySelector('.carousel-arrow-right');

let currentIndex = 0;
const images = carouselImages.querySelectorAll('img');
const totalImages = images.length;

carouselArrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
});

carouselArrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
});

    

const carousel = document.getElementById('carousel');
const images1 = carousel.getElementsByTagName('img');
let currentIndex1 = 0;

function showNextImage() {
    images1[currentIndex1].style.display = 'none';
    currentIndex1 = (currentIndex1 + 1) % images1.length;
    images1[currentIndex1].style.display = 'block';
}

setInterval(showNextImage, 3000);

