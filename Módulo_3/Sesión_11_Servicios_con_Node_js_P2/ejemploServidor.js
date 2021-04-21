//Código de la Sesión #11 del Módulo 3

//Este es el ejemplo completo de servidor web, que contempla 
//a un servidor web y un servicio web que vive en él.

//Para ejecutar este programa debemos poner en consola:
//node ejemploServidor.js 

//Tema ----> Servicios con Nodejs P2

//Importamos el módulo http para crear un servidor web con JavaScript
//y lo guardamos en la constante http para hacer uso de este.
const http = require( 'http' );

//Creamos una constante que guardará la dirección base del servidor web
//también llamada como host.
const direccion = 'localhost';
//Creamos una constante que guardará el puerto específico con el que 
//el cliente podrá hacer uso de los servicios del servidor
const puerto = 8080;

//Servicio Web
//Creamos una constante que guardará una función, esta función
//será nuestro servicio y se va a encargar de recibir las 
//peticiones y generar una respuesta para los clientes.
const servicioMensaje = function( peticion, respuesta ){
    //Creamos un switch que utiliza el url de la petición para descidir que funcionalidad utilizará
    switch( peticion.url ){
        case "/mensajeNavidad":
            //Para poder proveer una respuesta, debemos mandarla con
            //ciertos valores, como la cabecera del mensaje el "Header".
            //Por lo tanto específicamos el header, este mandará un JSON
            //y lo vamos a describir usando "application/json"
            respuesta.setHeader("Content-Type", "application/json");
            //Mandamos además un estado de la respuesta, un código 200
            //de que todo está bien y la respuesta es lo que se quería
            respuesta.writeHead(200);
            var resp = { mensaje: "Feliz Navidad" };
            //Por último mandamos nuestro mensaje escrito en JSON
            respuesta.end( JSON.stringify( resp ));
            //Salimos del switch para que no se ejecute nada más
            break
        case "/saludo":
            //Para poder proveer una respuesta, debemos mandarla con
            //ciertos valores, como la cabecera del mensaje el "Header".
            //Por lo tanto específicamos el header, este mandará un HTML
            //y lo vamos a describir usando "text/html"
            respuesta.setHeader("Content-Type", "text/html");
            //Mandamos además un estado de la respuesta, un código 200
            //de que todo está bien y la respuesta es lo que se quería
            respuesta.writeHead(200);
            //Por último mandamos nuestro mensaje escrito en HTML
            respuesta.end( '<html><body><h1>Bienvenidos al curso<h1></body></html>' );
            //Salimos del switch para que no se ejecute nada más
            break
        //En el caso que no se utilice la ruta /saludoNavidad o /saludo
        //usaremos el caso por defecto para mandar un error
        default:
            //Mandamos un estado de la respuesta, será un código 400 de error del usuario.
            respuesta.writeHead(400);
            //Por último mandamos nuestro mensaje de error escrito en JSON
            respuesta.end( JSON.stringify({ mensaje: "Te equivocaste" }));
            //Salimos del switch para que no se ejecute nada más
            break
    }
}

//Creación de servidor Web
//Guardamos en una constante la funcionalidad de la creación de un servidor web
//en el cual va a vivir el servicio de mensajes.
const servidor = http.createServer( servicioMensaje );

//Ponemos a la escucha de peticiones al servidor web 
servidor.listen( puerto, direccion, () => {
    //Imprimimos el mensaje de que se encuentra a la escucha y recibiendo
    //peticiones con una cierta dirección como base, a la cual se le tendrá 
    //que agregar la ruta ( /saludoNavidad o /saludo ) y obtener un cierto mensaje
    console.log( "El servidor está prendido y a la escucha" );
    console.log( "en http://" + direccion + ":" + puerto );
});
