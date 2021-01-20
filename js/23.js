//Arrows functions o funciones de flecha
//Sintaxis
//NOTA: cuando se tiene sólo una línea de código las "{}" son opcionales
/*LOS ARROWS FUNCTIONS NOS AYUDAN A ESCRIBIR MENOS CODIGO LO CUAL HACE QUE
SE VEA MAS LIMPIO*/

const sumar = (n1, n2) => {
    console.log(n1 + n2);
}

sumar(10, 10);

const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo('JavaScript');

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
meses.forEach((mes) => {
    if (mes == 'marzo'){
        console.log('Marzo si existe');
    }
});

//some: para arreglos de objetos como el de carrito
//NOTA: el return no es obligatorio al menos si se tiene una linea
const resultado2 = carrito.some((producto)=> {
    return producto.nombre === 'Celular';
});

console.log(resultado2);

//reduce: se tienen que pasar dos parámetros
const resultado3 = carrito.reduce((total, producto) => {
    return total + producto.precio
}, 0);
console.log(resultado3);

//filter: nos sirve para obtener elementos (ya sea números, texto)
const resultado4 = carrito.filter((producto) => {
    return producto.precio > 400
});

console.log(resultado4);