//for loop
//NOTA: Se dejan de ejecutar hasta que la condición se cumpla
//Ejemplo #1
for(let i = 0; i <= 10; i++){
    console.log(i);
}

//Ejemplo #2
for(let i = 0; i < 10; i++){
    if (i % 2 === 0){
        console.log(`El número ${i} es PAR`);
    } else {
        console.log(`El número ${i} es IMPAR`);
    }
}

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

//while loop

//do while loop