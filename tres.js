function mostrar()
{
	var precio;
	var descuento;
	var resultado;

	precio = prompt("Ingrese el precio: "); /*el prompt de utiliza para
	ademas de mostrar un cartel en pantalla, pedir el ingreso de datos 
	sea en numeros o letras depende de la condicion que le de*/
	descuento = prompt("Ingrese el porcentaje de descuento: ");
	precio = parseInt(precio);/*el parseeInt se utiliza para exigir 
	un numero*/
	descuento = parseInt(descuento);

	resultado = precio - ((precio * descuento)/100);/*se efectua
	la ecuacion por regla de 3 simple, ya que para sacar un porcentaje
	se rquiere hacer regla de 3 simple, del precio del producto por el 
	descuento y todo eso le divido 100 para luego restarle el precio real
	para ver el precio final del producto con el descuento*/
	document.getElementById('elPrecioFinal').value = resultado;/*sirve
	para calcular y mostrar en pantalla el resultado de la ecuacion*/
}