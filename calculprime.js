var stopped = false;

onmessage = function(e){
if(e.data == "stop"){
		stopped = true;
	}
}

function is_prim(n)
{
	for(var i = 2; i * i <= n; i++)
		if(n % i ==0)
			return false;
	
	return true;	
}

function calculeaza_prime(start_value)
{	if(stopped)
	;
	else
	{
	for (var i = start_value; i < startvalue + 1000; i++)
	{
		if(is_prim(i))
			postMessage(i);
	startvalue += 1000;
	}
	if(start_value < 10e10)
	setTimeout(calculeaza_prime, 1, start_value);
else
	postMessage("gata");
}
}
calculeaza_prime(1e9)