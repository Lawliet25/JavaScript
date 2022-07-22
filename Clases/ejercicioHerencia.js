class Persona{

    constructor(nombre, apellido, edad){
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._idPersona= ++Persona.contadorID;
    }
    static contadorID=0;  

    get id(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        return this._apellido=apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        return this._edad=edad;
    }
    toString(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad + ' ';
    }
}

class Empleado extends Persona{

    constructor(nombre, apellido, edad,sueldo){
        super(nombre,apellido,edad);
        this._sueldo=sueldo;
        this._idEmpleado=++Empleado.contadorEmpleadoID;
    }
    static contadorEmpleadoID=0;
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        return this._sueldo=sueldo;
    }
    toString(){
        return super.toString() + this.sueldo + ' ' + this._idEmpleado;
    }
}
class Cliente extends Persona{
    static contadorCliente=0;
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorCliente;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        return this._fechaRegistro=fechaRegistro;
    }
    toString(){
        return super.toString() + this._fechaRegistro + ' ' + this._idCliente;
    } 
}

persona1 = new Persona('Rodrigo','Valle','22');
console.log(persona1.toString());
empleado1 = new Empleado('Jose','Ramirez','25','2500');
console.log(empleado1.toString());
cliente1 = new Cliente('Jose','Ramirez','25','25/04/2015');
console.log(cliente1.toString());