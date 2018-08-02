function mostrar()
{

var num1;
	num1=prompt ("ingrese el número");
	num1=parseInt (num1);
	var contador;
	var divisores=0;
	
	for(contador=1 ;contador<=num1 ;contador++ )
	{
		if(num1%contador==0)
	{
		console.log(contador);
		divisores++;
	}
    }
	console.log("La cantidad de numeros divisores es: "+divisores)
    if(divisores>=3)
    {
    	alert("no es un numero primo");
    }
    else
    {
    	alert("Es un numero primo");
    }

}//FIN DE LA FUNCIÓN