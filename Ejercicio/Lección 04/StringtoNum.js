//Para convertir de string a number se usa Number

let cadena ="20";
let edad = Number(cadena);

// Con ternario

//edad = (edad>=18) ? "Puede votar xd" : "No puede votar";

if(isNaN(edad)){
    console.log("No es un número");
} else{
    if(edad>=18){
        console.log("Puede votar");
    } else{
        console.log("No puede votar xd");
    }
}