//Objetos

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

//Forma anterior
const precioProducto = producto.precio;

console.log(precioProducto);

//Destructuring: sacar de una estructura
//NOTA: cuando se hace uso de destructuring se utilizan "{}"

const {precio} = producto;

console.log(precio);

//Extraer varios

const {disponible, nombreProducto} = producto;

console.log(disponible);
console.log(nombreProducto);