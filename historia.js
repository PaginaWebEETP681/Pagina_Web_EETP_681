const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

/*open.addEventListener('click', () => {
    modal_container.classList.add('show')
});*/

/*close.addEventListener('click', () => {
    modal_container.classList.remove('show')
});
*/

$(document).ready(function(){
    var $popContainer = $('#popup-container');
    var $body = $('html,body');

    $('#fire-popup').on('click', function() {
        $popContainer.fadeIn();
        $body.addClass('block-scroll'); // clase de manejo
    });
    $('#popup-overlay').on('click', function() {
        $popContainer.fadeOut();
        $body.removeClass('block-scroll'); // clase de manejo
    });
});