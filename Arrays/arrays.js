const autos = ['Mercedes', 'Toyota', 'Marvel'];
console.log(autos);

//Accediendo a elementos de array

console.log(autos[0]);

//Usando for y agregando elememtos a array con índice y con push
autos[3]='Loool';
autos[3]='Audi';
autos.push('Elantra');

for(let i=0; i<autos.length;i++){
    console.log(autos[i])
}
//Preguntar si es arreglo

console.log(Array.isArray(autos));