function mostrar()
{
//tomo la edad  
var edad;
edad= document.getElementById('edad').value;

if(edad<=12)
	{
		(edad>=18)
		alert("Usted NO es un adolescente");
	}
	if(edad<18)
	{
		if(edad>12)
			alert("Usted es un adolescente")
	}

}//FIN DE LA FUNCIÓN
/*if(!(edad < 18 && edad > 12))
*/