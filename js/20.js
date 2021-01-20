//Funciones con parametros y argumentos
//Funciones más inteligentes

function sumar(numero1, numero2) { //numero 1 y 2 son parametros
    console.log(numero1 + numero2);
}

sumar(10, 10); //son argumentos o los valores reales


const sumar2 = function (numero1, numero2) {
    console.log(numero1 + numero2);
}

sumar2(5,10);


//Ejemplo de parametros por default (defecto)
function sumar3 (n1 = 2, n2 = 3){ //parametros por defecto
    console.log(n1 + n2);
}

sumar3();