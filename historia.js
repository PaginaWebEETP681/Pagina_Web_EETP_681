$(document).ready(function(){
    var regresar = $("#irArriba");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400){
            regresar.addClass("visible");
        }else{
            regresar.removeClass("visible");
        }
    });
    regresar.on("click", function(evento) {
        evento.preventDefault();
        $("html, body").animate({scrollTop: 0}, 500);

    })
});

//Modal Inscripciones
$("#inscripciones-link").on("click", function(event) {
    event.preventDefault(); 
    $("#modal-inscripciones").css("display", "block"); 
});

$(".close").on("click", function() {
    $("#modal-inscripciones").css("display", "none"); 
});

// Cerrar modal
$(window).on("click", function(event) {
    const modal = $("#modal-inscripciones");
    if ($(event.target).is(modal)) {
        modal.css("display", "none");
    }
});