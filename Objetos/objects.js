let persona = {
    
    //Definiendo atributos
    nombre: "Juan",
    apellido: "Ramírez",
    email: "jram@gmail.com",
    edad: 28,

    //Definiendo métodos
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }

}
console.log(persona.nombre);
console.log(persona.nombreCompleto());

//Creación de objeto con New

let persona2= new Object();
persona2.nombre= "Carlos";
persona2.apellido="Valle";
persona2.telefono="2252-0255";

persona2.Operaciones= function(){
    return this.nombre + ' ' + this.apellido;
}
console.log("El teléfono de " + persona2.Operaciones()+ " es: " + persona2.telefono);

//Usando for in

for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad])
}

//2 Formas de ver las propiedades de objetos que sí soportan los navegadores

let arrayPersona = Object.values(persona);
console.log(arrayPersona);

let stringPersona = JSON.stringify(persona);
console.log(stringPersona);