//Estructuras de control
//estructura de control IF

const puntaje = 1000;

if(puntaje === 1000){
    console.log('El puntaje es 1000');
} else {
    console.log('No es igual');
}

/*JS tiene un operador de comparacion triple ===, el cual es mas estricto
que el ==, el cual retorna si el valor comparado es el solicitado*/

//Estructura de control
const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito){
    console.log('El usuario puede pagar');
} else {
 console.log('El usuario no puede pagar');
}

//Estructura de control elseif

const rol = 'editor';
if (rol === 'administrador'){
    console.log('Acceso a todo el sistema');
} else if(rol === 'editor'){
    console.log('Eres editor puedes entrar');
} else {
    console.log('No tienes acceso');
}