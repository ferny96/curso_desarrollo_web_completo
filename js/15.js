//Arreglos - arrays

//Cuando se vean "[]" probablemente es un arreglo.
const numeros = [10,20,30,40,50];

console.table(numeros);

//También se pueden crear arreglos utilizando el constructor

const meses = new Array('enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre');

console.table(meses);

//Un arreglo puede contener todo tipo de dato: string, números, incluso arreglos

const arreglo = ['Hola', 100, true, null, {Nombre: 'Fernando', Apellido: 'Rodriguez'},[10,20,30,40,50]];

console.log(arreglo);

//Acceder a los valores del arreglo
console.log(numeros[4]);

//Conocer la extensión de un arreglo
console.log(meses.length);