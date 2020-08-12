'use strict';

//Zona de entradas declaración y valor a cada una de las variables

let administración = 0;
let metrosCuadrados = 0;
let tipoPredio = 0; //Apartamento (0) y casa (1)


//Zona Proceso

//SOLICITAR UNA INFORMACIÓN
tipoPredio = parseInt(prompt('Ingrese el tipo de predio, según convención'));
metrosCuadrados = parseInt(prompt('Ingrese los metros cuadrados'));

//invocar a función es poner en términos de la variable administración las demás variables
//que pasaremos como parámetros

administración = calcularAdministracion (metrosCuadrados, tipoPredio);

//calcular la función

//zona de salida
alert(`El valor de la admi es ${administración}`);

function calcularAdministracion (MT, T) {
    //BLOQUE DE DECISIÓN SEGUN TIPO DE PREDIO
    if(T === 0 ) {
        console.log('esto es un apartamento');
        return (MT* 1500 + 50000);
    }else if (T === 1){
        console.log('esto es un casa');
        return (MT* 1500 + 100000);
    }else {
        return('intentalo de nuevo ERROR');
    }

};


