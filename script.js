window.onload = function() 
{
	let e = document.getElementById("euro");
	let k = document.getElementById("kuna");
	e.oninput = function() 
	{
		k.value = (e.value * 7.5345).toFixed(4);
	};
	k.oninput = function() 
	{
		e.value = (k.value / 7.5345).toFixed(4);
	}
};