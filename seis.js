function mostrar()
{
	var estacionDelAño;
	var temperatura;

	estacionDelAño=prompt("Ingrese la estacion del año");
	temperatura=prompt("Ingrese la temperatura");

	temperatura=parseInt(temperatura);

	switch(estacionDelAño)
	{
		case: "Otoño"
		if(temperatura==15)
			{
				alert("Esta lindo.");
			}else
			{
				if (temperatura<15)
				{
					alert("Se vino el frio.");
				}else
				{
					if(temperatura>15 && temperatura<=21){
						alert("Esta re bueno!!");
					}else
					{
						alert("Mucho calor para Otoño");
					}
				}
			}
	}

}