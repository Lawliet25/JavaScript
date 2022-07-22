"use strict"

let numero = 5;

try{
    if(isNaN(numero)) throw 'No es un número';
    else if(numero === '') throw 'Es una cadena de texto vacía';
    else if(typeof numero == String) throw 'Es una cadena de texto';
    else if(typeof numero == Object) throw 'Es un objeto';
    else if(numero >= 0) throw 'Es un número positivo';
    else if(numero <0) throw 'Es un número negativo';
}
catch(error){
    console.log(error);
}

console.log('Hola');

