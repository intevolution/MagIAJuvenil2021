//Segundo código de la Sesión #11 del Módulo 3

//Versión de petición con Axios para el servidor web local

//Para ejecutar este programa debemos poner en consola:
//node getClienteV2.js

//Tema ----> Servicios con Nodejs P2

//Documentación de Axios
//https://www.npmjs.com/package/axios

//Importamos el módulo axios para que podamos realizar peticiones, 
//lo guardamos en una variables para hacer uso de este módulo.
const axios = require('axios');
//Declaramos una variable y no indicamos un contenido, solo la declaramos
var informacion;
//Usamos a la varaible axios y la función get, el cual nos ayudará a crear nuestra
//petición utilizando el método get, especificando su protocolo ya sea http o https
// y escribiendo el url de forma correcta, como es para un servidor web local no se
//necesita poner ni parámetros ni llave, solo se tiene que especificar la ruta correcta.
//Pueden ser 3 ( /mensajeNavidad , /saludo o /(alguna otra cosa) por ejemplo /ejemploNum1,
// en la primera opción obtendremos un mensaje JSON, en el segundo un saludo pero en HTML
// y en el último caso donde no era ninguno de los 2 anteriores, se mandará un mensaje de error
// por que se programó en el servicio que solo nos dará un resultado con las 2 primeras opciones).
axios.get('http://localhost:8080')
//Se usa .then para describir algo que se va a realizar después de realizar la petición,
//dentro de .then() debemos escribir una función que será nuestro callback, que recibirá
//la respuesta como tal, dentro de esta función haremos el tratamiento de los datos.
.then( respuesta => {
    //Guardamos la respuesta en una variable llamada "información", este caso
    //si guardamos todo y ya después solo mostramos el JSON.
    informacion = respuesta;
    //Imprimimos la información únicamente del JSON al utilizar .data
    //ya que esto describe solo al JSON de lo que es toda la respuesta.
    console.log( informacion.data );
//Utilizamos .catch para obtener el error que se pueda provocar en una petición
//es importante poner este método, ya que si no, puede arrojar un error pero no 
//de una petición, si no de ejecución.
}).catch( error => {
    //Imprimimos el error si es que hay uno.
    console.log( error )
    });
