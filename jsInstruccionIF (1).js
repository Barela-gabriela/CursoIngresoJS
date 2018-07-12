function mostrar()
{
//tomo la edad  
// if(condiciona la accion, y solo se cumple si y solo si es verdadero//
// si las instrucciones son falsas no se ejecuta la accion//
// la condicion se manifiesta de la siguiente manera:
//if(edad==15)
//alert("...")
// primero se verifica el ID del imput de la edad
//en este caso ell ID es "edad"(minuscula)
	var edad;

	edad=document.getElementById('edad').value;

	if(edad==15)
	{
		alert("Niña bonita");
	}

	

}//FIN DE LA FUNCIÓN