var jsonText = '{"estudiantes":[' + // Definimos el JSON
        '{"codigo":"009", "nombre":"Tomás", "nota":4.4},' +
        '{"codigo":"007", "nombre":"Diana", "nota":3.1},' +
        '{"codigo":"008", "nombre":"Andreina", "nota":3.8},' +
        '{"codigo":"006", "nombre":"Marcos", "nota":4.7},' +
        '{"codigo":"001", "nombre":"Alberto", "nota":4.5},' +
        '{"codigo":"005", "nombre":"Diego", "nota":4.4},' +
        '{"codigo":"004", "nombre":"Adrian", "nota":4.3},' +
        '{"codigo":"003", "nombre":"Isabella", "nota":3.9},' +
        '{"codigo":"002", "nombre":"Ricardo", "nota":4.1},' +
        '{"codigo":"010", "nombre":"Alejandra", "nota":4.6}' + ']}';

var jsObj = JSON.parse(jsonText); // Parseamos el JSON

  function mostrarJson() { // Definimos la funcion encargada de mostrar el JSON con un modelo MVC
  function readJson (json) { // Hacemos la funcion que va a leer el JSON
    var output = "==============Estudiantes=============<br>";
    var i;
    for (i = 0; i < json.estudiantes.length; i++) { // Definimos un bucle para que no pare de imprimir hasta que se acaben los numeros del JSON
        output+="Código: "+json.estudiantes[i].codigo+" -- "+"Nombre: "+json.estudiantes[i].nombre
        +" -- "+"Nota: "+json.estudiantes[i].nota+"<br>"; // Concatenamos todo
      }
      document.getElementById('listado').innerHTML = output; // Imprimimos
    }
readJson(jsObj); // Usamos la funcion readJson con el JSON ya parseado
}

function mostrarAverage() {
  function  averageNotas (json) {
    var i;
    var sumatoria = 0;
    var resultado;
    for (i = 0; i < json.estudiantes.length; i++) {
        sumatoria = sumatoria + json.estudiantes[i].nota;
      }
      resultado = sumatoria / json.estudiantes.length;
      document.getElementById('average').innerHTML = "El promedio de las notas del salón es: " + resultado.toPrecision(3);
    }
averageNotas(jsObj);
}

function mostrarMejorEstudiante() {
    function mejorStudent (json) {
        var nota = json.estudiantes[1].nota;
        var nombre;
        var o;
        for (o = 0; o < json.estudiantes.length; o++) {
            if (nota < json.estudiantes[o].nota) {
                nota = json.estudiantes[o].nota;
                nombre = json.estudiantes[o].nombre;
            }
            var mensaje = "El mejor estudiante es " + nombre + " " + "con una nota de " + nota;
            document.getElementById('bestStudent').innerHTML = mensaje;
        }
    }
    mejorStudent(jsObj);
}

function mostrarPeorEstudiante() {
    function peorStudent (json) {
        var nota = json.estudiantes[1].nota;
        var nombre = json.estudiantes[1].nombre;
        var i;
        for (i = 0; i < json.estudiantes.length; i++) {
            if (nota > json.estudiantes[i].nota) {
                nota = json.estudiantes[i].nota;
                nombre = json.estudiantes[i].nombre;
            }
            var mensaje = "La peor estudiante es " + nombre + " " + "con una nota de " + nota;
            document.getElementById('worstStudent').innerHTML = mensaje;
        }
    }
    peorStudent(jsObj);
}
