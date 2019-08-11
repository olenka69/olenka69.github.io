var entered=false;
function ente(){
	var entcode = prompt("Введите код для входа");
	if(entcode=="я лох"){
		document.getElementById("ent").style.display="none";
		document.getElementById("reg").style.display="none";
		document.getElementById("entered").style.display="inline";
		entered=true;
	}
}
function regi(){
	var entpass = prompt("Введите ФИО");
	alert("Добро пожаловать " +entpass+"\nКод для входа:\"я лох\"");
}