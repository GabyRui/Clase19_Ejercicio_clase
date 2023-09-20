/* PREGUNTA 1------------------------------------  */

function sumar(c,d) {
    console.log(c + d);
}

sumar(4,5)


/* PREGUNTA 2 y 3--------------------------------- */


//Función por expresión

const dividir = (num1, num2) => {
    console.log (num1 / num2);
}

dividir (45,3);

//RESPONDIENDO PREGUNTA 3 a partir del ejemplo usado para la pregunta 2.

//Para crear una función, primero se define si será por declaración o expresión.

//PARÁMETROS: Dentro de los paréntesis, se definen los parámetros que la función aceptará. Los parámetros son variables que representarán los valores cuando se invocan.En el caso de la función por declaración, los valores son c y d, y en el de expresión, es num1 y num2.

//ARGUMENTOS: En el caso de los ejemplos, la función por declaración invoca la función sumar con los argumentos 4 y 5, mientras que loss de expresión unvoca una división entre 45 y 3.


/* PREGUNTA 4 -----------------------------------*/

function resta (ab, cd) {
    return ab - cd;
}

function division (ef, gh) {
    return ef / gh;
}

const resultadoResta = resta(8, 2);
const resultadoDivision = division(resultadoResta, 2);

console.log(resultadoResta);
console.log(resultadoDivision);


/* PREGUNTA 5 - Arrow functions -----------------------------------*/


//declaración con arrow function

function sumInicio (numbers1, numbers2) {
    return numbers1 + numbers2;
}

//expresión con arrow functions

const sumSiguiente = (numbers1, numbers2) => numbers1 + numbers2;

console.log(sumInicio(20, 50));
console.log(sumInicio(30, 90));
console.log(sumSiguiente(80, 70));


/* PREGUNTA 6----------------------- */

const numberSpecial = 25;

function operacion () {
    if (numberSpecial % 2 === 0) {
        console.log('El número es par')
    }

    else {
        console.log('El número es impar')
    }
}

operacion()

/* PREGUNTA 7---------------- */

const historia = 80;
const biologia = 90;
const fisica = 55;
const ingles = 65;

if(historia >= 50) {
    console.log('Aprobaste de forma sobresaliente');
}

else if (biologia >= 50){
    console.log('Aprobaste de forma sobresaliente');
}

else if (fisica >= 50){
    console.log('Aprobaste, pero puedes mejorar');
}

else if (ingles >= 50){
    console.log('Aprobaste, pero puedes mejorar');
}

else{
    console.log('Tu nota no se encuentra en el registro');
}

/* PREGUNTA 8----SWITCH------------ */

const donacion = 'dinero'

switch(donacion){
    case 'pay pal':
    console.log('Utilizó pay pal para la donación.');
    break;

    case  'payoneer':
    console.log('Utilizó payoneer para la donación');
    break;

    case 'skrill':
    console.log('Utilizó skrill para la donación');
    break;

    case 'dinero':
    console.log('Utilizó dinero para la donación');
    break;

    default:
    console.log('No utilizó ningún método de pago');
    break;
}

/* PREGUNTA 9 ------------------------------------ */

function calculateSeniority(edad) {
    const mayorEdad = 18;

    if (mayorEdad >= 18) {
        console.log('eres apto para ingresar');
        /* return; */
    }

    if (mayorEdad >= 16) {
        console.log('puedes entrar al sistema especial');
        return;
    }

    if (mayorEdad <= 15) {
        console.log(' no eres apto para ingresar');
        return;
    }

}

calculateSeniority();

//en este ejemplo, la función comprende hasta el segundo if, y si en caso hubiesen más condiciones que cumpliesen con el requerimiento de la condición, la consola solo mostrará lo que figura hasta el segundo if, ya que con return, se finaliza la ejecución de la función.


/* PREGUNTA 10 -----------------------------------*/

const edad = 30;
const resultado = edad > 30 ? "cumples con la edad mínima" : "no cumples con la edad requerida";
console.log(resultado);



