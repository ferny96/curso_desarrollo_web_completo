//Variables con const

//NOTA: ";" no es obligatorio ponerlo, en JS es opcional
/*NOTA: Diferencias entre LET y CONST:
        Con CONST no se puede inicializar una variable sino tiene valor
        Con CONST no se puede reasignar el valor, ejemplo:
        disponible = true;
        */

const producto = 'Audifonos Gamer'; //iniciar variable y asignarle valor
const disponible = true; //También se pueden crear variables sin asignarle valor
//producto = true; //Reasignando el valor de la variable.

const producto1 = 'Computadora',
disponible1 = true,
categoria = 'Computadoras'; //Inicializar multiples varibles para evitar poner tantas veces VAR

const disponible_ = true; /*Se puede hacer uso de GUIÓN BAJ0 al inicio y al final de una variable, los números también
                    se pueden usar pero sólo al final, es decir, disponible1*/

//Estilos para las variables
const nombre_producto = 'Monitor HD'; //Underscore
const nombreProducto = 'Monitor HD'; //Camelcase
const NombreProducto = 'Monitor HD'; //Pascal case