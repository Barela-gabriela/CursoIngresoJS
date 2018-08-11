function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var mayor;
	var menor;

	numeroUno=prompt("Ingrese numero: ");
	numeroDos=prompt("Ingrese numero: ");
	numeroTres=prompt("Ingrese numero: ");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);
	if (numeroUno>numeroDos && numeroUno>numeroTres) {
		alert(mayor=numeroUno);
	}
		else
		{
			if(numeroDos>numeroUno && numeroDos>numeroTres){
				mayor=+numeroDos;
			}
			else
			{
				mayor=+numeroTres
			}
		}
	if(numeroUno<numeroDos && numeroUno<numeroTres)
	{
		menor=numeroUno
	}
	else
			{
				if (numeroDos<numeroUno && numeroDos<numeroTres) 
				{
					menor=numeroDos;
				}
					else
					{
						menor=numeroTres;
					}
			}

	alert("El mayor es: "+mayor);
	alert("El menor es: "+menor);
	
}
/*
		if(numeroUno>numeroDos && numeroUno>numeroTres)
	{
			alert("El mayor es: "+numeroUno);
	}else
	{

		if(numeroDos>numeroUno && numeroDos>numeroTres)
	{
		
			alert("El mayor es: "+numeroDos);
	}else
	{
		if(numeroTres>numeroUno && numeroTres>numeroDos)
	{
			alert("El mayor es: "+numeroTres);
	}
	}
	}*/
	/*{
		if(numeroUno>numeroDos && numeroUno>numeroTres){
			numeroUno=mayor;
		}else{
			numeroUno=menor;
		}
	

		if(numeroDos>numeroUno && numeroDos>numeroTres){
			numeroDos=mayor;
		}else{
			numeroDos=menor;
		}
	
		if(numeroTres>numeroUno && numeroTres>numeroDos){
			numeroTres=mayor;
		}else{
			numeroTres=menor;
		}
		alert("El numero mayor es "+mayor+" y el menor es "+menor);
	}
	*/