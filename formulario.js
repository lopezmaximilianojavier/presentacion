function mostrarFormulario(){
    var formulario = document.getElementById("formulario");
    formulario.style.display = "block";
}

function darGracias(){
    var gracias = document.getElementById("gracias");
    if (window.getComputedStyle(gracias).display === "none") {
        gracias.style.display = "block";
        var formulario = document.getElementById("formulario");
        formulario.style.display = "none";
    } else {
        gracias.style.display = "none";
    }
}

$(document).ready(function(){
	$('.heart').on('click',function(){
		$(this).toggleClass("heart_animate");
	});
});