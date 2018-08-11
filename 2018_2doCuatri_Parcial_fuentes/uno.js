
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var litroPintura;

	ancho=prompt("ingrese el ancho");
	largo=prompt("ingrese el largo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);
	perimetro=parseInt(perimetro);

	perimetro=ancho*2+largo*2

	litroPintura=perimetro*3

		alert("El perimetro es "+perimetro+" y los litros de pintura necesarios para pintar son "+litroPintura);
}
