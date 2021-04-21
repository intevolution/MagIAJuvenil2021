//Código de la Sesión #10 del Módulo 3

//Este código todavía no se puede ejecutar, se tiene que ir a la versión de la sesión 11
//para que se vea el ejemplo completo, ya que en este programa únicamente se contempla a 
//un servicio web que nos regresa un mensaje y falta un servidor web en donde pueda vivir.

//Tema ----> Servicios con Nodejs P1

//Documentación del módulo http
//https://nodejs.org/api/http.html

//Importamos el módulo http para crear un servidor web con JavaScript
//y lo guardamos en la constante http para hacer uso de este.
const http = require( 'http' );
//Creamos una constante que guardará la dirección base del servidor web
//también llamada como host.
const host = 'localhost';
//Creamos una constante que guardará el puerto específico con el que 
//el cliente podrá hacer uso de los servicios del servidor
const port = 8080;
//Creamos una constante que guardará una función, esta función
//será nuestro servicio y se va a encargar de recibir las 
//peticiones y generar una respuesta para los clientes.
const servicioMensaje = function( peticion, respuesta ){
    //Para poder proveer una respuesta, debemos mandarla con
    //ciertos valores, como la cabecera del mensaje el "Header"
    //Por lo tanto específicamos el header, este mandará un JSON
    //y lo vamos a describir usando "application/json"
    respuesta.setHeader("Content-Type", "application/json");
    //Mandamos además un estado de la respuesta, siguiendo
    //los codigos que se han visto antes, ya sea un código 200
    //de que todo está bien o 400 donde se equivocó el usuario.
    respuesta.writeHead(200);
    //Por último mandamos nuestro mensaje escrito en JSON
    respuesta.end({mensaje : "Hola a todos los participantes"});
}
