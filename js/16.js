//Métodos para los arrays

const numeros = [10,20,30,40,50];
console.log(numeros);

const meses = new Array('enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre');
console.table(meses);

//Agregar elementos en un arreglo
numeros[5] = 60; //Esta forma no es muy común
console.table(numeros);

numeros.push(70); //También así se pueden agregar elementos, push agrega al final del arreglo
console.table(numeros);

numeros.push(80,90,100); //Para multiples elementos
console.table(numeros);

/*NOTA: .push agrega elementos al final
        .unshift agrega elementos al inicio*/

numeros.unshift(-10,-20,-30); //unshift agrega elementos al inicio del arreglo
console.table(numeros);

//Eliminar elementos de un arreglo
meses.pop(); //Elimina el último elemento del arreglo
console.table(meses);

meses.shift(); //Elimina el primer elemento del arreglo
console.table(meses);

//Eliminar multiples elementos
meses.splice(2, 3);
console.table(meses);

//Rest Operator o Spread Operator
/*NOTA: lo recomendable es no modificar los valores de un arreglo
        sino crear uno nuevo*/

const nuevoArreglo = [... meses, 'ENERO']; //Esta forma agrega al final
console.table(nuevoArreglo);

const nuevoArreglo2 = ['ENERO', ...meses]; //Esta forma agrega al inicio
console.table(nuevoArreglo2);