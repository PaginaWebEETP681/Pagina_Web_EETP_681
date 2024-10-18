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

document.getElementById("inscripciones-link").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace realice su acción predeterminada
    document.getElementById("modal-inscripciones").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal-inscripciones").style.display = "none";
});