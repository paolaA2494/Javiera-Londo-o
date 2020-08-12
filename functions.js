'use strict';
//Ejercicios semana9
//Ejercicio 1
 
const product = (a,b) => {
    return a*b;
}

console.log(`el produto de esta multiplicación es: ${product(7, 11)}`);
console.log(`el produto de esta multiplicación es: ${product(3, 10)}`);
console.log(`el produto de esta multiplicación es: ${product(6, 4)}`);

//Ejercicio 2

function media (a, b, c, d){
    const result = (( a + b + c + d )/ 4);
    return result;
}

console.log(`La media es: ${media(7, 11, 5, 8)}`);
console.log(`La media es: ${media(2, 3, 6, 9)}`);
console.log(`La media es: ${media(4, 16, 5, 1)}`);


//Ejercicio 3

const precio = function (s) {
    const iva = s*0.21;
    const total = iva + s;
    const result = `El precio sin iva es, ${s}, el iva ${iva} y el precio total ${total}`;
    return result;
}

console.log(precio(10));


//Ejercicio4
function calculatorContent (borderBox, width, padding, border){
    let result = '';
    if (borderBox === true) {
        result = `El ancho del contenido es: ${width}px`;
     
    } else {
       result =`El ancho total de la caja es: ${width+padding+border}px`;
      
    }
    return result;
  
}
console.log(calculatorContent(true, 30, 4, 7));

//EVENTOS js
const button = document.querySelector('.alert');
//Función handler, ejecutar cuando el evento se escuche 

const showAlert = () => console.log('Alerta');

//listener sobre el elemento

button.addEventListener('click', showAlert);

//Ejercicio 1 

/*Hola click
Crear una página HTML con un párrafo en el 
que ponga Hola y un botón. Usando JavaScript, 
cambiar ese texto por "Mi primer click,
 ¡ole yo y la mujer que me parió!" cuando se pulse el botón.*/

 const botonsito = document.querySelector('.botonsito');

 //función handler

 function showText () {
     const parrafo = document.querySelector('p');
     const content = "Mi primer click, ¡ole yo y la mujer que me parió!";
    parrafo.innerHTML = content;
}

//escuche ese evento
botonsito.addEventListener('click', showText);

//Ejercicio 2

/*¿Cómo te llamas?
Crear una página HTML 
con un input de tipo texto para introducir 
tu nombre y un botón. Al pinchar sobre el botón, 
imprimir en la consola el mensaje 'Hola ', con el 
nombre que aparece en el input de texto.*/

//Defenir el elemento que escuchaa el evento

const buttonSaludo = document.querySelector('.change');

buttonSaludo.addEventListener('click', function textInput (){

    console.log("Hola, Paola Hernández");
});

















