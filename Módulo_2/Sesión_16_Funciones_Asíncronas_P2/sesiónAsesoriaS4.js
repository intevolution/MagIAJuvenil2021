//Declarar una matriz
//Una matriz es un arreglo de arreglos, se declara de la siguiente forma:
let matrizPeces = [
    [ "Salmón", "Atún" ], [ "Cangrejo", "Pez Globo" ]
];
//Si queremos acceder a un valor en específico,
//tendremos que indicar el indice de cada arreglo.
//El primer indice nos dice la posición de un arreglo
//El segundo indice nos dice la posición de un valor en el arreglo seleccionado
//En este ejemplo se accederá al arreglo en la posición 1 y el valor en la posición 0 de este mismo arreglo
console.log( matrizPeces[1][0] );

//Para declarar una matriz vacía se hará de la siguiente forma:
let matrizVacia = [
    [ ], [ ]
];
//Para agregar valores, los asignaremos con sus 2 índices
matrizVacia[0][0] = "Hola";
console.log( matrizVacia[0][0] );

//Ejemplo de descomposición de objetos
//Creamos el objeto "producto" con distintas propiedades
let producto = {
    nombreProducto: "Chocolate",
    precio: 25,
    peso: "1.5 kg",
    cantidad: 5  
}
//Realizamos la descomposición del objeto "producto",
//declarando 2 variables que guardaran las propiedades
//del objeto, por lo tanto se guardarán de forma automática 
//sin la necesidad de hacerlo una por una.
let { nombreProducto, peso } = producto;
//Para verificar que la descomposición se realizó de 
//manera correcta, imprimimos el valor de las variables.
console.log( nombreProducto );
console.log( peso );
