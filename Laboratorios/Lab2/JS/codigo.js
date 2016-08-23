//Llamamos a la funcion ready

$(document).on("ready", inicio);
function inicio(){
	$("#Publicar").on("click", mensaje);

}
function mensaje(){
	alert("Haz presionado el boton publicar");

}