function mostrar()
{
	var planeta;

	planeta=prompt("Ingresar un planeta s/mayusculas s/tildes");

	switch(planeta)
	{
		case "tierra":
			alert("Acá vivimos.");
			break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "neptuno":
			alert("Acá hace más frio");
			break;

		case "venus":
		case "mercurio":
			alert("Aca hace más calor.");
			break;

		default:
			alert("Planeta no valido");
	}
}
/*switch se usa para dar una serie de casos/opciones, funciona algo
parecido al if pero, este es mas simple ya que en vez de estar poniendo
si una condicion pasa, pasa tal otra, el switch funciona de manera en 
la cual en una opcion te pone los casos en tal caso que elijas dicha 
caracteristica*/
/*default funciona como el else, pero en este caso en vez de ser el
contrario, es si no se cumple la consigna y la persona falla */