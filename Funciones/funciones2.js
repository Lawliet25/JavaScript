let resultado = sumarTodo(4,5,12,10,6);
console.log(resultado);

function sumarTodo(){
 let suma=0;
 for(let i=0; i<arguments.length;i++){
    suma += arguments[i]; //suma = suma + argumento(i)
 }
 return suma;
}