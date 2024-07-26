document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.clickable-img');

    imgs.forEach(img => {
        img.addEventListener('click', () => {
            // Elimina la clase 'expanded' de todas las imágenes
            imgs.forEach(i => i.classList.remove('expanded'));

            // Agrega la clase 'expanded' a la imagen clicada
            img.classList.add('expanded');
        });
    });

    // Opcional: Cerrar la imagen ampliada al hacer clic fuera de ella
    document.addEventListener('click', (event) => {
        if (!event.target.classList.contains('clickable-img')) {
            imgs.forEach(img => img.classList.remove('expanded'));
        }
    });
});