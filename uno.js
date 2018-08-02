
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("ingrese el ancho");
	largo=prompt("ingrese el largo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=ancho*2+largo*2
	alert(perimetro)
}
/*
    var numUno;
	var numDos;
	var resultado;
	numUno= prompt("Ingrese un numero");
	numDos= prompt("Ingrese otro numero");
	numUno=parseInt(numUno);
	numDos=parseInt(numDos);
	if(numUno==numDos)
	{
		alert(numUno=numDos);
	}
	else
	{ 
	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);


	resultado=numeroUno+numeroDos;
	alert(resultado)
}*/