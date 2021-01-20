//Más métodos de arreglos
/*NOTA: No existen los arreglos asociativos en JS*/

const meses = ['enero','febrero','marzo','abril','mayo','junio'];

const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Televisión de 20 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

//foreach
meses.forEach(function(mes){
    if (mes == 'marzo'){
        console.log('Marzo si existe');
    }
});

//Includes: para arreglos planos como el de meses
const resultado = meses.includes('marzo');
console.log(resultado);

//some: para arreglos de objetos como el de carrito

const resultado2 = carrito.some(function(producto){
    return producto.nombre === 'Celular';
});

console.log(resultado2);

//reduce: se tienen que pasar dos parámetros

const resultado3 = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);
console.log(resultado3);

//filter: nos sirve para obtener elementos (ya sea números, texto)
const resultado4 = carrito.filter(function(producto){
    return producto.precio > 400
});

console.log(resultado4);

//NOTA: Filter es el más utilizado