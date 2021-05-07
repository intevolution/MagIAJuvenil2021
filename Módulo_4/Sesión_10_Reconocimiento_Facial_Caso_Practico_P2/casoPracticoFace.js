//Código de la Sesión #10 del Módulo 4

//Programa para el acceso de personal en una empresa

//Para ejecutar este programa debemos poner en consola:
//node casoPracticoFace.js

//Tema ----> Reconocimiento Facial Caso práctico

//Utilizar los servicios de microsoft azure para crear un programa que nos permita acceder
//a un edificio al mostrar los datos de nuestra identificación, si los datos son correctos nos
//mostrará un mensaje de que podemos pasar, en caso contrario no nos dejará acceder al edificio

//Llamamos a la librería axios para realizar peticiones
const axios = require( 'axios' );

//Para guardar los datos de los empleados se puede hacer de 2 formas, una es creando
//el arreglo y llenando cada índice de forma explícita, como se puede apreciar de la
//forma 1, llenamos una a una de las posiciones mientras que en la forma 2 lo que
//tenemos es que a medida que declaramos el arreglo agregamos los datos de los empleados.

//Forma 1
var enlaces = [];
//Datos de empleados
enlaces[0] = { nombre: "pedro", clave: 5555, foto: 'Identificador del empleado(Obtenido previamente)'};
enlaces[1] = 'Datos empleado 2';
enlaces[2] = 'Datos empleado 3';

//Forma 2
var datosEmpleados = [{ nombre: "Luis", clave: 2525, foto: 'Identificador del empleado( Obtenido previamente)'}];

//NOTA: Los identificadores o ids de las fotos guardadas en el servicio solo durarán 24 horas

//Guardamos la dirección del servicio Face en la funcionalidad Detección de rostros ( endpoint, punto de acceso ) en una variable
var direccionDetecta = 'URL del servicio cognitivo';
//Guardamos la dirección del servicio Face en la funcionalidad Verificación de rostros ( endpoint, punto de acceso ) en una variable
var direccionVerifica = 'URL del servicio cognitivo'; 
//Declaramos la variable que guardará el enlace de la foto de la credencial a analizar, simulando
//que este enlace es la foto que se muestra a la entrada de la empresa
var datosDetecta = { url : "URL de la imagen" }

//Función que realizará la petición al servicio y tendrá una función callback
function peticion( callback ){
    //Peticion POST - Servicio Face ( Detección de Rostros )
    axios.post( direccionDetecta, datosDetecta, {
        //Definimos los atributos de la cabecera
        headers : {
            //Entro de estos atributos debemos definir el atributo de la llave y el tipo de info que se mandará
            'Ocp-Apim-Subscription-Key': 'Aquí va la llave del servicio',
            'Content-Type': 'application/json'
        }
    })
    //Usamos la función then para definir el caso de exito donde nos regresa la información,
    //Dentro de esta, escribimos una función flecha, que nos ayudará a trabajar con nuestro resultado
    .then( respuestaDetecta => {
        callback( respuestaDetecta.data[0].faceId );    
    })
    //Definimos el caso de error, solamente se obtendrá el error de la petición y se mostrará en consola
    .catch( error => console.log(error));    
}

//Función que servirá de callback una vez que obtengamos el identificador de la "credencial"
function verifica( datosCredencial ){
    //Variable que guardará el json que mandaremos en el body
    var datosVerifica = { 
        faceId1: datosEmpleados[0].foto,
        faceId2: datosCredencial 
    };
    //Peticion POST - Servicio Face ( Verificación de Rostros )
    axios.post( direccionVerifica, datosVerifica, {
        //Definimos los atributos de la cabecera
        headers : {
            //Entro de estos atributos debemos definir el atributo de la llave y el tipo de info que se mandará
            'Ocp-Apim-Subscription-Key': 'Aquí va la llave del servicio',
            'Content-Type': 'application/json'
        }
    })
    //Usamos la función then para definir el caso de exito donde nos regresa la información,
    //Dentro de esta, escribimos una función flecha, que nos ayudará a trabajar con nuestro resultado
    .then( respuestaVerifica => {
        //Condicional que con base en la respuesta del servicio
        //va decidir si el empleado entra o no al edificio
        //NOTA - Debe ser true en minúsculas 
        if( respuestaVerifica.data.isIdentical == true){
            console.log( "Eres la misma persona, puedes pasar" );
        }
        else{
            console.log( "NO eres la misma persona, NO puedes pasar" );
        }    
    })
    //Definimos el caso de error, solamente se obtendrá el error de la petición y se mostrará en consola
    .catch( error => console.log( error ));
};

//Llamada a la función "petición"
peticion( verifica );
