//Código de la Sesión #13 del Módulo 4

//Petición POST al servicio de traducción de textos

//Para ejecutar este programa debemos poner en consola:
//node postTraducción.js

//Tema ----> Traducción de textos caso práctico

//Llamamos a la librería axios para realizar peticiones
const axios = require( 'axios' );

//Declaramos la variable que guardará el texto a traducir
var datos = [{"Text" : "Aquí va un texto en algún idioma disponible"}];

//Guardamos la dirección del servicio ( endpoint, punto de acceso ) en una variable
var direccion = 'Aquí va la llave del servicio';

//Con axios realizamos la petición POST
axios.post( direccion, datos, {
    //Dentro de estos atributos debemos definir el atributo de la llave y el tipo de info que se mandará
    headers : {
        //Valor de la llave del servicio 
        'Ocp-Apim-Subscription-Key': 'Aquí va la llave del servicio',
        //La región donde se encuentra el servicio
        'Ocp-Apim-Subscription-Region' : 'southcentralus',
        'Content-Type' : 'application/json'  
    }
})
//Accedemos al atributo que contiene el texto traducido
.then( respuesta => console.log( respuesta.data[0].translations[0].text ))
//Obtenemos el error que puede existir en la petición
.catch( error => console.log( error ));
