//Código de la sesión de asesorías del Módulo 2

//Para ejecutar este programa debemos poner en consola:
//node ejercicioRepaso.js

//Ejercicio de repaso de la semana 1

//Para calcular el promedio de prácticas de un curso 
//se tomará la calificación de las 4 prácticas que se 
//hicieron, de estas 4 se va a eliminar la práctica con 
//menor calificación y se obtendrá el promedio de las 3 
//prácticas restantes.

//Variables que guardarán las calificaciones y el promedio
const practicaN1 = 8;
const practicaN2 = 9;
const practicaN3 = 10;
const practicaN4 = 7;
var resultado = 0;
// Variable que controlará que calificación es la más baja
var califMenor = practicaN1;

//Condicional IF - Comparará entre las calificaciones y si alguna es menor, sustituirá la calificación actual
if( practicaN2 < califMenor ){
    califMenor = practicaN2;
}
else if( practicaN3 < califMenor ){
    califMenor = practicaN3;
}
else if( practicaN4 < califMenor ){
    califMenor = practicaN4;
}

//Calculamos el promedio, pero restamos la calificación menor para no considerarla
resultado = ( practicaN1 + practicaN2 + practicaN3 + practicaN4 - califMenor ) / 3 

//Imprimimos el promedio obtenido en pantalla
console.log( "El promedio es: " + resultado );
