var echo = function(output)
{
	var doc = document.getElementById("hello");

	doc.innerHTML = doc.innerHTML+"<h3>"+output.toString()+"</h3>";
}
var loadMe = function()
{
    var jsElm = document.createElement("script");
    jsElm.type = "application/javascript";
    jsElm.src = 'test.js';
    document.body.appendChild(jsElm);
}