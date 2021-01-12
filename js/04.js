//Tipos de datos, string o cadena de texto.

/*NOTA: Con typeof podemos saber que tipo de dato es, ejemplo:
        console.log(typeof producto);*/

const producto = 'Monitor de 20 pulgadas'; //Esta sintaxis es la más usada
const producto2 = "Monitor de 20\"";
const producto3 = String('Monitor de 30 pulgadas'); //Haciendo uso de un constructor
const producto4 = new String ('Monitor de 50 pulgadas');

console.log(producto);
console.log(producto2);
//console.log(producto2);
//console.log(producto3);

//Métodos para los String
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const producto6 = 'Monitor HD';

console.log(tweet.length); //LENGHT: para saber la extención del texto (tamaño).
console.log(producto6);

//IndexOF: permite identificar la posición en la que se encuentra un texto que busquemos
console.log(tweet.indexOf('JavaScript'));

//NOTA: cuando arroja -1 indica que no encontró lo que buscamos.

//INCLUDES: retorna true o false
console.log(tweet.includes('JavaScript'));
console.log(producto6.includes('Tablet'));