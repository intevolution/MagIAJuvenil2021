//Código de la Sesión #9 del Módulo 4

//Petición POST al servicio de reconocimiento facial

//Para ejecutar este programa debemos poner en consola:
//node postFaceDetecta.js

//Tema ----> Reconocimiento Facial Caso práctico

//Llamamos a la librería axios para realizar peticiones
const axios = require( 'axios' );

//Declaramos la variable que guardará el enlace de la foto a analizar
var datos = { url: "URL de la imagen" };

//Guardamos la dirección del servicio ( endpoint, punto de acceso ) en una variable
var direccion = 'URL del servicio cognitivo';

//Con axios realizamos la petición POST
axios.post( direccion, datos, {
    //Definimos los atributos de la cabecera
    headers : {
        //Entro de estos atributos debemos definir el atributo de la llave y el tipo de info que se mandará
        'Ocp-Apim-Subscription-Key': '326d364a0fbe4a39998455172d1a3b46',
        'Content-Type': 'application/json'
    }
})
//Usamos la función then para definir el caso de exito donde nos regresa la información,
//Dentro de esta, escribimos una función flecha, que nos ayudará a trabajar con nuestro resultado
.then( respuesta => console.log( respuesta.data ))
//Definimos el caso de error, solamente se obtendrá el error de la petición y se mostrará en consola
.catch( error => console.log(error));
