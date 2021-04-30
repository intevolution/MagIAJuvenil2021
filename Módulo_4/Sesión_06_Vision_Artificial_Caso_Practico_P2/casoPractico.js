//Crear un programa utilizando los servicios cognitivos de  
//Microsoft Azure, logrando analizar fotos en distintos horarios 
//y nos diga en que momento del día hay menor número de gente.

//Código de la Sesión #6 del Módulo 4

//Caso práctico sobre el servicio de Azure Computer Vision

//Para ejecutar este programa debemos poner en consola:
//node casoPractico.js

//Tema ----> Visión artificial Caso práctico Parte 2

//Crear un programa utilizando los servicios cognitivos de  
//Microsoft Azure, logrando analizar fotos en distintos horarios 
//y nos diga en que momento del día hay menor número de gente.

//Llamamos a la librería axios para realizar peticiones
const axios = require('axios');

//Declaramos el arreglo que guardará todos los enlaces de las fotos a analizar
var enlaces = [];

//Hacemos la asignación de cada uno de los enlaces en las posiciones del arreglo
enlaces[0] = 'https://imagenes.milenio.com/10zznD-XQNjlZA_HzoB8aXyRRgs=/936x566/https://www.milenio.com/uploads/media/2021/03/26/metro-cdmx-cerrara-estaciones-linea.jpeg';
enlaces[1] = 'https://centrourbano.com/revista/wp-content/uploads/Metro_Medidas-anti-covid-735x400.jpg';
enlaces[2] = 'https://i.pinimg.com/originals/c4/88/23/c48823ec2c8f5594f72f8b2b157029fc.jpg';
enlaces[3] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Insurgentes_Sur_metro_station.jpg/1200px-Insurgentes_Sur_metro_station.jpg';
enlaces[4] = 'https://fastly.4sqi.net/img/general/600x600/15982566_DFtpG9ChwzeLhPEbrW8tVUIwxJLmt7UEi3bITdTqMSA.jpg';
enlaces[5] = 'https://i.pinimg.com/originals/0e/af/31/0eaf316649985512be0f28089098726b.jpg';

//Guardamos la dirección del servicio en una variables
var direccion = 'Aquí va la url del servicio';

//Creamos la función que hará la petición al servicio
//Debemos tomar en cuenta que la función recibirá 2 parámetros y al momento de llamarla debemos darle esos valores
function peticion( cont , callback ){
    //Declaramos la variable que guardará la información que queramos de nuestro JSON
    var respuestaInfo;
    //Guardamos el cuerpo o "body" de nuestra petición con el formato establecido en el servicio
    var data = { url: enlaces[cont] }
    //Con axios realizamos la petición POST 
    axios.post( direccion , data, { 
        //Definimos los atributos de la cabecera
        headers: {
            //Entro de estos atributos debemos definir el atributo de la llave y el tipo de info que se mandará
            'Ocp-Apim-Subscription-Key' : 'Aquí va tu llave',
            'Content-Type': 'application/json' 
        }
    //Usamos la función then para definir el caso de exito donde nos regresa la información 
    }).then( respuesta => {
        //Dentro de esta, escribimos una función flecha, que nos ayudará a trabajar con nuestro resultado,
        //este lo guardamos en una variable y lo definimos como un objeto con el atributo "etiquetas"
        //se hace de esta forma para que se entienda aun mejor que se va a mandar ( Solamente las etiquetas )
        respuestaInfo = { 
            //Utilizando la notación para acceder a un objeto, accedemos a las etiquetas de nuestra respuesta
            //y las guardamos en su respectivo atributo, para que después pueda ser leido por la funcion "imprimirDatos"
            etiquetas: respuesta.data.description.tags 
        };
        //Mandamos la información de las etiquetas y el número de la foto a nuestra función callback, ojo se le dice
        //callback porque se ejecutará después de la petición (que también es una función)
        callback( respuestaInfo , ( cont + 1 )); 
    //Definimos el caso de error, solamente se obtendrá el error de la petición y se mostrará en consola   
    }).catch( err => {
        //Imprimimos este error
        console.log("Error: ", err.message);
    });
    
}

//Esta función será la que imprima los resultados finales una ves que obtengamos respuesta de la petición
function imprimirDatos( datosRespuesta , cont ){
    //Declaramos una variable j que controlará el ciclo do while
    var j = 0;
    do{
        //Creamos un condicional que al encontrar la etiqueta 'gente', mandará un mensaje y saldrá del ciclo,
        // obteniendo unicamente lo que nos importaba, que era, saber si había gente en la foto
        if( datosRespuesta['etiquetas'][j] == 'gente'){
            //Imprimimos el mensaje de que hay gente y el número de la foto
            console.log( "Hay personas en la estación " + cont );
            //Utilizamos break para salir del do while
            break;
        }
        //Creamos un condicional que al NO encontrar la etiqueta 'gente' y haber recorrido todo
        //el arreglo, nos imprimirá un mensaje de que no hubo gente en la imagen.
        if( (datosRespuesta['etiquetas'][j] !== 'gente') && (j == ( datosRespuesta['etiquetas'].length - 1))){
            //Imprimimos el mensaje de que NO hay gente y el número de la foto
            console.log( "NO hay personas en la estación " + cont );
            //Utilizamos break para salir del do while
            break;
        }
        //Incrementamos la variables j
        j++;
    //Definimos una condición, en donde, al recorrer todas las etiquetas se terminará el ciclo
    }while( i < datosRespuesta['etiquetas'].length);

}

//Creamos un ciclo for para realizar 6 peticiones y analizar todas las fotos
for( var i = 0; i < 6 ; i++ ){
    //Hacemos la llamada a la función y le damos todos los valores
    peticion( i , imprimirDatos );
}
