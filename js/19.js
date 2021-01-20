//Diferencias de un método y una función, tiene que ver más que todo en el contexto que son utilizadas
const numero = 20;
const numero2 = '20';

console.log(parseInt(numero2)); //parseInt() es una función.
console.log(numero.toString()); //.toString() es un método.

/*NOTA:
1. Los que tiene un punto seguido del nombre son métodos ejemplo: .toString().
2. Los que tienen el nombre de la función luego los parenbesis son funciones*/