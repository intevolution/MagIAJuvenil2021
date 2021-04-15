//Documentación de Axios
//https://www.npmjs.com/package/axios

//Importamos el módulo axios para que podamos realizar peticiones, 
//lo guardamos en una variables para hacer uso de este módulo.
const axios = require('axios');
//Declaramos una variable y no indicamos un contenido, solo la declaramos
var informacion;
//Usamos a la varaible axios y la función get, el cual nos ayudará a crear nuestra
//petición utilizando el método get, especificando su protocolo ya sea http o https
// y escribiendo el url de forma correcta, si necesita llave se tendrá que escribir también.
axios.get('https://api.openweathermap.org/data/2.5/weather?q=Mexico&appid=(aqui va tu llave)')
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
