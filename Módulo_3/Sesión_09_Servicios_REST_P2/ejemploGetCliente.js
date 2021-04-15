//Importamos el módulo https para poder crear una petición
const https = require('https');

//Utilizamos la constante y usamos el método get para realizar una petición con el método GET
//Dentro del paréntesis incluimos el url y una función que recibirá la respuesta del servidor
//Al final, en esta función, la respuesta se representará con el parámetro "respuesta" 
//y con el trabajaremos para lograr guardar el valor y manipularlo
https.get('https://api.openweathermap.org/data/2.5/weather?q=Ecuador&appid=(aqui por tu llave)', ( respuesta ) => {
    //Declaramos una variable que guardará nuestro JSON
    let informacion = '';
    //Una vez que la respuesta llege, sucederá un evento 'data', este representa que ya tenemos la información
    //por lo tanto es necesario guardarla, esta información se manda al parámetro "chunk", después lo guardamos
    //en la variable informacion concatenandola
    respuesta.on('data', ( chunk ) => { 
        //Podemos concatenar esta infomación de la forma larga 
        //informacion = informacion + chunk;
        //También podemos guardar la informacion con un operador "+=" para ahorrar tiempo
        informacion += chunk; 
    });
    //En esta instrucción se define el evento en donde todo termina, cuando ya se tiene la respuesta,
    //lo único que resta es imprimir la información obtenida anteriormente
    respuesta.on('end', () => {
        //Dado que el JSON se concatenó con una cadena de texto, tenemos que convertir lo denuevo en JSON
        //para eso utilizamos JSON.parse(), con esto podremos obtener todos los datos que queremos de forma sencilla
        var datosJSON = JSON.parse(informacion)['weather'];
        //Imprimirmos el valor específicamente del atributo main que nos da el nombre del clima actual
        console.log( datosJSON[0]['main'] );
    });
//En esta instrucción describimos al evento donde ocurre un error en la petición, esto es obligatorio, ya que si falla y 
//no consideramos esto, puede provocar que un error en consola, con esto solo veremos el error pero de la petición
}).on('error', ( error ) => {
    //Imprimimos el error que podría surgir
    console.log( "Error: " + error);
    });
