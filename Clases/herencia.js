class Persona {

    //Atributos con static
    static contador =0;

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
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo método
    toString(){
        //Se aplica polimorfismo
        return this.nombreCompleto();
    }
    static Hola(persona1){
        console.log("Hola statics");
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Usando sobreescritura para modificar nombreCompleto()
    nombreCompleto(){
        return super.nombreCompleto() + ' y es de: ' + this._departamento;
    }
}
let persona1 = new Persona('Rodrigo','Valle', 'Ingeniero');
let empleado1 = new Empleado('José','Sanchez','Abogado');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(persona1.nombreCompleto());
Persona.Hola(persona1);
console.log(Persona.contador);