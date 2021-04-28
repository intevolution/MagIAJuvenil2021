//Código de la Sesión #5 del Módulo 4

//Petición POST al servicio de visión artificial

//Para ejecutar este programa debemos poner en consola:
//node peticionPost.js 

//Tema ----> Visión artificial Caso práctico

const axios = require('axios');

//Datos
var datos = { url : "URL de la imagen"} ;

//Dirección de la petición( endpoint, punto de acceso )
var direccion = 'URL del servicio cognitivo';

//Petición POST
axios.post( direccion, datos, {
    //Cabecera de la petición
    headers : { 'Ocp-Apim-Subscription-Key': '9f8839e9bd4e446c8d1bfad49bd6db72', 
                'Content-type': 'application/json'
    } 
})
//Caso en donde se lográ obtener una respuesta del servicio
.then( respuesta => console.log( respuesta.data.categories[1].detail ))
//Caso en donde el servicio nos devuelve un error
.catch( error => { console.log( error ) });
