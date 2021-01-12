// "use strict"; //Hace que el código de JS se ejecute de manera estricta

//Objetos
//Objects Methods

const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

Object.freeze(producto); //Freeze no permite agregar más propiedades al método
Object.seal(producto);

/*Diferencias entre freeze y seal:
freeze: no permite agregar, eliminar y cambiar propiedades.
seal: no permite agregar, eliminar propiedades pero sí permite modificar existentes.
*/

producto.imaagen = 'foto.png';

console.log(Object.isFrozen(producto));

console.log(producto);