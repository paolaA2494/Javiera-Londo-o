'use strict';

//Zona de entradas declaración y valor a cada una de las variables

let administración = 0;
let metrosCuadrados = 0;
let tipoPredio = 0; //Apartamento (0) y casa (1)
let cuotaAseo = 0;
let genero = "";
let edad = 0;
//suponer que por casa solo un derecho de gimnasio
let derechoGym = 0;


//Zona Proceso

//SOLICITAR UNA INFORMACIÓN
tipoPredio = parseInt(prompt('Ingrese el tipo de predio, según convención'));
metrosCuadrados = parseInt(prompt('Ingrese los metros cuadrados'));

//invocar a función es poner en términos de la variable administración las demás variables
//que pasaremos como parámetros

administración = calcularAdministracion (metrosCuadrados, tipoPredio);
cuotaAseo = calcularCuotaAseo (administración, metrosCuadrados);

//proceso para solicitar info, sobre la cuota de gym
genero = prompt('Ingrese el género');
edad = parseInt(prompt('Ingrese su edad'));
//invocar la función para el derecho de gym



//calcular la función
//zona de salida
alert(`El valor de la admi es ${administración}`);
alert(`El valor de la cuota de aseo es ${cuotaAseo}`);


//ADMINISTRACIÓN
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

//CUOTA DE ASEO

function calcularCuotaAseo (A, MT){
    return((A*0.10) + (MT*1000));
};


