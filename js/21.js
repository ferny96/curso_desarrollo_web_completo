//Funciones que retornan valores
//Ejemplo simple
function sumar (n1, n2){
    return n1 + n2;
}

const resultado = sumar(2, 3);
console.log(resultado);

//Ejemplo más avanzado
let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(800);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con el impuesto es: ${totalAPagar}`);