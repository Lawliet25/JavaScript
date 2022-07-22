class Persona {

    //Atributos con static
    static contadorPersonas =0;

    static get MAX_OBJ(){
        return 5;
    }

    //Declaramos las propiedades con un comstructor
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.id_persona =++Persona.contadorPersonas;
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
    nombreCompleto(){
        return this.id_persona + ' '+ this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo método
    toString(){
        //Se aplica polimorfismo
        return this.nombreCompleto();
    }
    static Hola(persona1){
        console.log("Hola statics");
    }
}if (Persona.contadorPersonas < Persona.MAX_OBJ) {
    this.id_persona=++Persona.contadorPersonas;
}else{
    console.log("Límite de objetso superado.")
}
let persona1 = new Persona('Juan','Valle');
console.log(persona1.toString());
let persona2 = new Persona('José','Ramirez');
console.log(persona2.toString());
let persona3 = new Persona('José','Ramirez');
console.log(persona3.toString());
let persona4 = new Persona('José','Ramirez');
console.log(persona4.toString());
let persona5 = new Persona('José','Ramirez');
console.log(persona5.toString());
let persona6 = new Persona('José','Ramirez');
console.log(persona6.toString());

console.log(Persona.MAX_OBJ)
