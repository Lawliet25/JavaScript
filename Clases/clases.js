class Persona {

    //Declaramos las propiedades con un comstructor
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //Declaramos métodos get y set
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    set apellido(apellido){
        return this._apellido=apellido;
    }
}

let persona1 = new Persona('Juan', 'Pérez');
persona1.nombre='Rodrigo'
persona1.apellido='Valle' //Set
console.log(persona1._nombre+ ' ' + persona1.apellido); //Get