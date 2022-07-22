//Función constructor de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido= apellido;
    this.email= email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }

}
Persona.prototype.tel=54545;
let padre = new Persona('Juan', 'Perez', 'adas@ds.com');
console.log(padre);

let madre = new Persona('María', 'López', 'asd@c.com');
console.log(madre.nombreCompleto());

padre.tel='454545555';
console.log(padre.tel);
console.log(madre.tel);