/*Pedir por prompt el importe del producto, 
la cantidad y el nombre, mostrar un solo mensaje 
on el siguiente texto : “compró la cantidad xx 
					del producto xx , a un precio de xx, pagando el precio de xx con iva incluido”.function mostrar()*/
function mostrar()
{
	var producto;
	var cantidad;
	var precio;
	var ivaDescuento;
	var precioFinal;

	producto=prompt("Ingrese el nombre del producto");
	cantidad=prompt("Ingrese la cantidad que desea comprar");
	precio=prompt("Ingrese el precio del producto");
	
	cantidad=parseInt(cantidad);
	precio=parseInt(precio);

	precioFinal=cantidad*precio
	ivaDescuento=precioFinal-(precio*21)/100

	alert("Compró la cantidad de "+cantidad+" del producto "+producto+", a un precio de "+precioFinal+", pagando el precio de "+ivaDescuento+" con Iva incluido");
}
