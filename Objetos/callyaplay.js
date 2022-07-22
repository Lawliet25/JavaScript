let persona1={
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo,tel){
        //return this.nombre + ' ' + this.apellido;

        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Ramirez',
}

console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2,'Ing','515151'));

//Con aply se hace arreglo de parámetros a diferencia de call que es separado por comas
let arreglo = ['Ing', '5522622'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));