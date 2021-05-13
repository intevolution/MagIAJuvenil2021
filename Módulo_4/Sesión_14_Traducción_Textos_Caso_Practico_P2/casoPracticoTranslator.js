//Código de la Sesión #14 del Módulo 4

//Petición POST a múltiples funcionalidades del servicio de traducción

//Para ejecutar este programa debemos poner en consola:
//node casoPracticoTranslator.js

//Tema ----> Traducción de textos caso práctico

//Crear un programa para que Spencer pueda ayudar 
//a los pasajeros dando instrucciones sobre donde 
//deben de ir dependiendo de la pregunta inicial, 
//estas instrucciones deben estar en el idioma que 
//el pasajero usó para su pregunta inicial.


const axios = require( 'axios' );
const prompt = require( 'prompt-sync' )();


const accionesRespuesta = [
    "Sube las escalera de nuestra derecha",
    "Puedes dejar tu equipaje en el area 2",
    "Los policias se encuentran en el area 3",
    "La pista 5 se encuentra en el area 4",
    "Puedes transbordar en el area 1",
    "El baño se encuentra al fondo a la derecha"
]

//Saludos en distintos idiomas
console.log( "Hola, ¿Cuál es tu duda?" );
console.log( "Hello, what is your question?" );
console.log( "Bonjour, quelle est ta question?" );
console.log( "こんにちは、あなたの質問は何ですか？" );

//Se puede implementar con prompt para dar una pregunta por consola
//NOTA: Escribir todo en minúsculas y sin acentos
//var pregunta = prompt("-->  ");
//Guardar la pregunta en una variable directamente
var pregunta = "トイレはどこだ?";

//Función principal que hara la petición a la detección de idiomas
function deteccion( texto, callback ){
//Comentario para probar unicamente la función por separado
//function deteccion( texto ){
    //Body de la petición de detección de idioma, usando la pregunta para saber el idioma
    var datosDeteccion = [{ "Text": texto }];
    //Dirección del servicio
    var direccionDeteccion = 'Aquí va el url del servicio';
    //Petición POST
    axios.post( direccionDeteccion, datosDeteccion, {
        //Dentro de estos atributos debemos definir el atributo de la llave y el tipo de info que se mandará
        headers : {
            //Valor de la llave del servicio  
            'Ocp-Apim-Subscription-Key': 'Aquí va la llave del servicio',
            //La región donde se encuentra el servicio
            'Ocp-Apim-Subscription-Region' : 'southcentralus',
            //Tipo de contenido del body
            'Content-Type' : 'application/json'  
        }
    })
    //Accedemos al atributo que contiene la detección del idioma y mandamos el código a la función callback
    .then( respuesta => { callback( respuesta.data[0].language, texto ) } )
    //Obtenemos el error que puede existir en la petición
    .catch( error => console.log( error ));
}

//Función que traducción que se ejecutará después de la petición de detección
function traduccion( idioma, texto ){
    //Switch que controlará la respuesta dependiendo de la pregunta
    switch( texto ){
        //Distintos casos de preguntas
        //¿Donde está el baño? - En Japonés
        case "トイレはどこだ?":
            //Guardamos el body de la petición en una variable
            var respuestaIdioma = [ { "Text": accionesRespuesta[5] } ];
            //Salimos del switch 
            break;
        //¿Donde puedo dejar mi maleta? - En Francés
        case "Ou puis-je laisser ma valise?":
            //Guardamos el body de la petición en una variable
            var respuestaIdioma = [ { "Text": accionesRespuesta[1] } ];
            //Salimos del switch
            break;
    }
    //Guardamos la dirección del servicio adicionando el idioma por separado
    var direccionTraduccion = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to='+idioma;
    //Petición POST
    axios.post( direccionTraduccion, respuestaIdioma, {
        //Dentro de estos atributos debemos definir el atributo de la llave y el tipo de info que se mandará
        headers : {
            //Valor de la llave del servicio
            'Ocp-Apim-Subscription-Key': 'Aquí va la llave del servicio',
            //La región donde se encuentra el servicio
            'Ocp-Apim-Subscription-Region' : 'southcentralus',
            //Tipo de contenido del body
            'Content-Type' : 'application/json'  
        }
    })
    //Accedemos al atributo que contiene la traducción, la cuál vamos a mostrar
    .then( respuesta => console.log( respuesta.data[0].translations[0].text ))
    //Obtenemos el error que puede existir en la petición
    .catch( error => console.log( error ));
}

//Llamada a la función general del servicio
deteccion( pregunta, traduccion );
