function mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	var nota;
	nota= Math.floor((Math.random()*10)+1);
	alert(nota);
	if(nota>9)
	{
		alert(nota+"EXCELENTE")
	} 
	if(nota>4)
	{
		alert(nota+"APROBO")
	}
	if(nota<4)
	{
		alert(nota+"Vamos la proxima se puede")
	}
	


}//FIN DE LA FUNCIÓN