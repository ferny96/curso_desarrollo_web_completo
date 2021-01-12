//Modificar objetos
const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

//Agregar nuevas propiedades
producto.imagen = 'foto.png';

console.log(producto);

//Eliminar propiedades
delete producto.disponible;

console.log(producto);