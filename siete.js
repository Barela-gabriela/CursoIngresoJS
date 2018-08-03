function mostrar()
{
	var edad;
	var sexo;
	var nombre;
	var nota;
	var contador;
	var peorNota;
	var peorNotaSexo;
	var masViejo;
	var masViejoNombre;

	contador=0;

	while(contador<6)
	{
		contador++;
		nombre= prompt("Ingrese nombre");

		sexo= prompt("Ingrese sexo");
		while(sexo!="f"&& sexo!="m")
		{
			sexo= prompt("Ingrese sexo");
		}

		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad)|| edad<0 || edad>100)
		{
			edad= prompt("ingrese edad");
			edad= parseInt(edad);
		}

		nota= parseInt(nota);
		nota= prompt("ingrese nota");
		while(isNaN(nota)|| nota<0 || nota>10)
		{
			nota= prompt("ingrese nota");
			nota= parseInt(nota);
		}	
		if(contador==1)
		{
			peorNota=nota;
			peorNotaSexo=nota;
			masViejo=edad;
			masViejoNombre=nombre;
		}
		else
		{
			if(nota<peorNota)
			{
				peorNota=nota;
				peorNotaSexo=nota;
			}
			if(edad>masViejo)
			{
				masViejo=edad;
				masViejoNombre=nombre;
			}
		}
	}

}