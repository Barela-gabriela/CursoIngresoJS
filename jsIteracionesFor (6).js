function mostrar()
{
	var num1;
	num1=prompt ("ingrese el número");
	num1=parseInt (num1);
	var contador;
	var pares=0;
	
	for(contador=1 ;contador<=num1 ;contador++ )
	{
		if(contador%2==0)
	{
		console.log(contador);
		pares++;
	}
    }
	console.log("La cantidad de numeros pares es: "+pares)
}

/*console.log(num1)*/