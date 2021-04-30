var secciones = [];


var resultado;

window.onload = init;

function init(){

    setTimeout(hideURLbar, 0);
    asignarVariables();
    asignarEventos();

    if(resultado)
	{
        traerDatos();
    
    }
}

function traerDatos(){
	fetch('https://rickandmortyapi.com/api/character')
	.then(response => response.json())
	.then(data => console.log(data));

}

function pintardatos(data){

	console.log(data.results[0].name.first);

	var datos;
	var temp;
	var ans = "";
	
		console.log(data.results[0].name.first);
		datos = data.results;
		for(var i in datos)
	{
		temp = datos [i];
		ans+= "<div class= 'usuario'><img class = 'img-circle' src='"+temp.picture.medium+"' />";
		ans+= "<p>";
		ans+= temp.name.first+" "+temp.name.last;
		ans+= "</p></div>";
	
	}
	resultado.innerHTML(ans);

}

function asignarVariables(){

    resultado = document.getElementById("resultado");
    secciones["seccion_1"]= document.getElementById("seccion_1");
    secciones["seccion_2"]= document.getElementById("seccion_2");
    secciones["seccion_3"]= document.getElementById("seccion_3");
    secciones["seccion_4"]= document.getElementById("seccion_4");
    secciones["seccion_5"]= document.getElementById("seccion_5");
    secciones["seccion_6"]= document.getElementById("seccion_6");

}