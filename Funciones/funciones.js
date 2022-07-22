//Declarando funciones

function Multiplicacion(a,b){
    return a*b;
}
console.log(Multiplicacion(5,9));

//Otra forma es guardando en una variable

let multiplicaion = function(a,b){
    return a*b;
};
let resultado = multiplicaion(4,5);
console.log(resultado);

//Función tipo flecha

const  MifuncionFlecha = (a,b)=>(a+b);
resultado2 = MifuncionFlecha(4,90);
console.log(resultado2);