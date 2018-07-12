function mostrar()
{
	var edad;
	edad= document.getElementById('edad').value;
	
	if(edad<18)
	{
		if(edad>12)
			alert("Usted es un adolescente")
	}
	if(edad<13)
	{
		if(edad>0)
		alert("Usted es un niño")
	}
	if(edad>18)
	{
		alert("Usted es un adulto")
	}

 



}//FIN DE LA FUNCIÓN
//tomo la edad 