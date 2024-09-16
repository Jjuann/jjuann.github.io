function alertUser()
{
	alert("Hello world");
}
function fontChange()
{
	document.getElementById("textAreaID").style.fontSize = "24pt";
}
function fancifyText()
{
	document.getElementById("textAreaID").style.color = "blue";
	document.getElementById("textAreaID").style.fontWeight = "bold";
	document.getElementById("textAreaID").style.textDecoration = "underline";
}
function fancyAlert()
{
	alert("Fancy text!");
}
function boringBettyText()
{
	document.getElementById("textAreaID").style.color = "black";
	document.getElementById("textAreaID").style.fontWeight = "initial";
	document.getElementById("textAreaID").style.fontSize = "initial";
	document.getElementById("textAreaID").style.textDecoration = "none";
}
function boringAlert()
{
	alert("Boring text...");
}
function mooifyText()
{
	let phrase = document.getElementById("textAreaID").value.toUpperCase();
	let parts = phrase.split(".");
	let mooText = parts.join("-Moo.");
	document.getElementById("textAreaID").value = mooText;
}