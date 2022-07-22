class Empleado{
    constructor(nombre,sueldo){
        this._nombre=nombre;
        this._sueldo=sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}
class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return super.obtenerDetalles() + `, departamento: ${this._departamento}, gerente`;
    }
}
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
    }
    else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
    }
}
let gerente1 = new Gerente('Rodrigo','$5000','Sistemas');
let empleado1 = new Empleado('Rodrigo','$5000');

imprimir(empleado1);
imprimir(gerente1);