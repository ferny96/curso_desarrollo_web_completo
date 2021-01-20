//Funciones
//declaración de función (sintaxis)
function sumar(params) {
    console.log(10*10);
}

//mandar a llamar
sumar();

//Expresión de la función (sintaxis)
const sumar2 = function () {
    console.log(3 + 3);
}

sumar2();

//IIFE: son funciones que se mandan a llamar ellas mismas
/*NOTA: Permite proteger la información que tenemos y que no se mezcle con la de otros archivos*/
(function() {
    console.log('Esto es una función');
})();

//DIferencias entre funciones vídeo número 116