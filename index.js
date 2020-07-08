'use strict';

//Paralelismo del Café



function hacerCafe (nombreDelCafe){

    return `Aquí está su ${nombreDelCafe}, que lo disfrutes`;
}

console.log(hacerCafe('Capuccino'));

//Función sin parámetro
function saludo (){
    return 'Hola';

}

console.log(saludo());

//Función Parámetros

/*let numeroUno = 0;
let numeroDos = 0;

numeroUno = parseInt(prompt('ingrese el número 1'));
numeroDos = parseInt(prompt('ingrese el número 2'));


function sumar (numeroUno, numeroDos){

    return  numeroDos + numeroUno;
}

console.log(sumar(numeroUno,numeroDos));*/

//Tipos de datos
/*let nombre = 'Paola';
let age = 26;
let haveChildren = false;
let studies = {
    nombre: 'UDEA',
    años: 5,

}
let monts = ['enero', 'febrero', 'marzo'];

console.log(age);
console.log(nombre);
console.log(haveChildren);
console.log(studies.nombre);
console.log(monts[0]);*/

//Funciones Anónimas
const sum = function (a,b){
    return a + b;
  
}

console.log(sum(2, 3));


//Parámetros y valores retorno

function multiplicación (a,b){
    const result = a * b;

    return result;
}

console.log(multiplicación(5,6));

//Ámbito de las variables
const variableGlobal = 'Soy global';

//Asegurarnos que entra  en un bloque  if(condicional)

if ( 2 === 2 ){
    const variableGlobal = 'realmente no soy global';
    const varibleNoGlobal = 'No soy Goblal';
    //Devolver

    console.log(variableGlobal);
    console.log(varibleNoGlobal);
}

//Fuera de su Bloque
console.log(variableGlobal);
//console.log(varibleNoGlobal);



/*'2' == 2 //Verdadero
'2' === 2 //Falso*/

//podemos acceder a variables del ámbito superior

let globalVar = 'Ey, i am global';

if ( 2 === 2 ) {
    globalVar ='Ey i am STILL Goblal';

    //devolver
    console.log(globalVar);
}

console.log(globalVar);

//No genera conflicto el tener dos constantes igual en diferentes funciones

function f1 (){
    const item = 1;
    return item;
}

function f2 () {
    const item = 2;
    return item;
}

console.log(f1());
console.log(f2());

//Funciones Flecha ECMAS6

const multi = (a,b) => {
    return a * b;
}

console.log(multi(3,4));


/*const multi = function (a,b) {
    return a * b;
}*/

//podemos evitar los parentesis cuando la función tenga un unico parámetro

/*const printWattingTime = minutes => {
    
    console.log(`Please, wait ${minutes} minutes`);

   
}*/

//equivale a, usando palabra reservada function

const printWattingTime = minutes => `Please, wait ${minutes} minutes`;
    
    console.log(printWattingTime(4));
    



   
