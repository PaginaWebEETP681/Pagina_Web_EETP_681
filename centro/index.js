// script.js
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideInterval = 3000; // Intervalo de cambio de diapositiva en milisegundos (3000ms = 3s)

// Función para cambiar la diapositiva
function changeSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

// Actualiza el slider
function updateSlider() {
    const offset = -currentIndex * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

// Configura el intervalo de cambio automático
setInterval(changeSlide, slideInterval);

// Funcionalidad de botones prev y next
document.querySelector('.next').addEventListener('click', () => {
    changeSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
});
