//Código de la Sesión de la asesoría #2 del Módulo 2

//Para ejecutar este programa debemos poner en consola:
//node ejercicioRepasoS2.js

//Crea un programa en donde tengas que adivinar 
//las letras de una palabra de 4 letras, tendrás solo 
//4 intentos para adivinarla, en un inicio la palabra 
//estará oculta, pero cada vez que aciertes, se mostrará 
//la letra, si adivinas la palabra antes de que se
//te acaben los intentos ganas, sino pierdes.

//Utilizamos la funcionalidad prompt para pedir valor en pantalla
const prompt = require('prompt-sync')();
console.log( "Ingresa letra a letra la palabra a adivinar" );
//Declaramos los 2 arreglos, uno para guardar las letras
//y otro para guardar la palabra oculta y podamos descubrirla
var palabraOculta = [];
var palabraMostrada = ["-","-","-","-"];
//Declaramos 2 variables, una que cuenta los ciertos que tenemos
// y la otra que cuenta los fallos que tenemos
var contadorAciertos = 0;
var contadorFallas = 4;

//Guardamos la palabra letra a letra y la guardamos 
//en una posición del arreglo
palabraOculta[0] = prompt( "Dame la letra número 1: " );
palabraOculta[1] = prompt( "Dame la letra número 2: " );
palabraOculta[2] = prompt( "Dame la letra número 3: " );
palabraOculta[3] = prompt( "Dame la letra número 4: " );

//Creamos un bucle for para que podamos repetir
//las instrucciones un número de veces
for( var i = 0; i < (palabraOculta.length * 2); i++ ){
    //Declaramos la variable que guardará la letra ingresada
    var intento = prompt( "Ingresa una letra: " );
    //Creamos un switch para controlar la letra
    //que ingresamos, como sabemos que solo serán
    //4 valores, escogemos el switch en vez del if
    switch( intento ){
        //Escribimos los casos que puede tener
        //la variable "intento", los primeros 4 casos
        //abarcan las 4 letras del arreglo        
        case (palabraOculta[0]):
            //Si la letra ingresada es igual
            //a la del arreglo, descubrimos 
            //la letra y sumamos un acierto
            palabraMostrada[0] = palabraOculta[0];
            console.log( palabraMostrada );
            contadorAciertos++; 
            break;
        case (palabraOculta[1]):
            //Si la letra ingresada es igual
            //a la del arreglo, descubrimos 
            //la letra y sumamos un acierto
            palabraMostrada[1] = palabraOculta[1];
            console.log( palabraMostrada );
            contadorAciertos++;
            break;
        case (palabraOculta[2]):
            //Si la letra ingresada es igual
            //a la del arreglo, descubrimos 
            //la letra y sumamos un acierto
            palabraMostrada[2] = palabraOculta[2];
            console.log( palabraMostrada );
            contadorAciertos++;
            break;
        case (palabraOculta[3]):
            //Si la letra ingresada es igual
            //a la del arreglo, descubrimos 
            //la letra y sumamos un acierto
            palabraMostrada[3] = palabraOculta[3];
            console.log( palabraMostrada );
            contadorAciertos++;
            break;
        default:
            //Si la letra ingresada no es igual
            //a la del arreglo, mostramos los 
            //intentos que nos restan y restamos 
            //el numero total de fallas que nos
            //faltan antes de perder
            console.log( "Te equivocaste :C" );
            console.log( "Te quedan " + (contadorFallas-1) + " intentos");
            console.log( palabraMostrada );
            contadorFallas--;
            break;    
    }
    //Para poder salir del for una vez que tengamos, 
    //4 aciertos o 4 fallos, salimos a la fuerza,
    //con la instrucción break, al cumplir alguna de 
    //estas condiciones, saldremos del ciclo for.
    if( contadorAciertos == 4 ){
        break;
    }
    else if( contadorFallas == 0 ){
        break;
    }
}
//Por ultimo, si el contador de fallas llega a 0
// y el contador de aciertos no llegó a 4, o
//si el contador de fallas no llegó a 4 ni tampoco
//el contador de aciertos llegó a 4, se mostrará
//un mensaje que nos avise que perdimos
if( (contadorFallas == 0 && contadorAciertos < 4) || (contadorFallas < 4 && contadorAciertos < 4)){
    console.log( "PERDISTE, vuelve a intentarlo" );
}
//Si el contador de aciertos llega a 4, mostramos
//un mensaje que nos avise que ganamos
else if ( contadorAciertos == 4){
    console.log( "GANASTE, Adivinaste toda la palabra :D" );
}
