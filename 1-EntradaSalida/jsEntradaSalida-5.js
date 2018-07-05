/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	nombre= prompt("ingrese su nombre");
	edad= prompt("ingrese su edad");
	alert("Usted se llama "+nombre+" y tiene "+ edad +" años");
}