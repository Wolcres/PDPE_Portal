/* var secciones = []; */
var resultado;

window.onload = init;

function init() {

    setTimeout(hideURLbar, 0);
    /*  asignarVariables(); */
    /* asignarEventos(); */
    console.log('antes de llamar a traer datos')
    traerDatos();

}
function traerDatos() {
    fetch('https://rickandmortyapi.com/api/character').then(x =>
        x.json().then(response => {
            var ans = "";
            for (var i in response.results) {
                console.log('dentro del for')
                console.log( response.results[i])
                temp = response.results[i];
               
               // document.write("<h1>"+temp.name+"</h1>")
                document.write("<div class= 'usuario'><img class = 'img-circle' src='" + temp.image + "' />")
                ans += "<div class= 'usuario'><img class = 'img-circle' src='" + temp.image + "' />";
                ans += "<p>";
                ans += temp.name;
                ans += "</p></div>";
            }

            resultado.innerHTML = ans;

        }

        ))
    //	.then(response => response.json())
    //	.then(data => pintardatos(data));

}


function llenarDatos(results) {

    for (var i in results) {
        temp = results[i];
        ans += "<div class= 'usuario'><img class = 'img-circle' src='" + temp.image + "' />";
        ans += "<p>";
        ans += temp.name;
        ans += "</p></div>";

    }


}

function pintardatos(data) {

    console.log('holi')
    console.log(data.results.name);

    var datos = data.results;
    var temp;
    var ans = "";

    //console.log(data.results[0].name.first);


    for (var i in datos) {
        temp = datos[i];
        ans += "<div class= 'usuario'><img class = 'img-circle' src='" + temp.picture.medium + "' />";
        ans += "<p>";
        ans += temp.name.first + " " + temp.name.last;
        ans += "</p></div>";

    }
    //  console.log(ans);
    resultado.innerHTML = ans;

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

/* function asignarEventos(){

    var temp;
    for(var i in secciones)
    {
        if(bajo_logeo[i]==indice)
        {
            return true;
        }

    }

} */