//Estructuras de control
//Switch
/*NOTA: para verificar multiples opciones un SWITCH es una mejor opción que un IF*/
const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'tarjeta': //Inicio de ejecución
        console.log('Pagaste con tarjeta');
        break; //Final de ejecución
    case 'cheque':
        console.log('El usuario va a pagar con cheque, revisaremos los fondos primero');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
    console.log('Aun no haz pagado');
    break;
}