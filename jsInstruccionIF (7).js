function mostrar()
{
//tomo la edad  
	var edad;
	var EstadoCivil;
	edad= document.getElementById('edad').value;
	EstadoCivil=document.getElementById('estadoCivil').value;
	if(edad<18 && EstadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero")

	}

	


}//FIN DE LA FUNCIÓN