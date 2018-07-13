function mostrar()


{
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
		

		if(numUno>numDos)
		{
			resultado=;
			alert("resultado de la división es: "+(numUno/numDos));
		}
		else
		{
			if((numUno+numDos)<50)
			{
			alert("la suma es: "+(numUno+numDos)+" y es menor a 50")
			}
		}
	}
	
}
/*function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;
	alert("El resultadode la suma es: "+resultado)
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno- numeroDos;
	alert("El resultado de la resta es: "+resultado)
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;

    numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno*numeroDos;
	alert("El resultado de la multiplicación es: "+resultado)
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno/numeroDos;
	alert("El resultado de la división es: "+resultado)
}*/