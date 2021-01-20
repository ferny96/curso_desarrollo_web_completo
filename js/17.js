//Más métodos de arreglos
/*NOTA: No existen los arreglos asociativos en JS*/

const meses = ['enero','febrero','marzo','abril','mayo','junio'];

const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Televisión de 20 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 500},
    {nombre: 'Teclado', precio: 500},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 500},
    {nombre: 'Laptop', precio: 500}
];

//foreach
meses.forEach(function(mes){
    if (mes == 'marzo'){
        console.log('Marzo si existe');
    }
});

//Includes
const resultado = meses.includes('marzo');
console.log(resultado);