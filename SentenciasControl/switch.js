let mes=6;
let mensaje;

switch (mes){
    case 1: case 2: case 3:
        mensaje ="Invierno";
        break; 
    case 4: case 5: case 6:
        mensaje="Verano";
        break;
    default:
        mensaje = "Nel";
    }
    console.log(mensaje);