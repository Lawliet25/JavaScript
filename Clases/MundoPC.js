class DispositivoEntrada{
    constructor(tipoEntrada,marca){
         this._tipoEntrada = tipoEntrada;
         this._marca= marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        return this._marca = marca;
    }
}
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor (tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    toString(){
        return `[ID ratón: ${this._idRaton}  Tipo de entrada: ${this._tipoEntrada}  Marca: ${this._marca}]`;
    }

}
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor (tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    toString(){
        return `[ID teclado: ${this._idTeclado} Tipo de entrada: ${this._tipoEntrada} Marca: ${this._marca}]`;
    }

}
class Monitor{
    static contadorMonitores=0;
    constructor(marca,tamaño){
        this._marca=marca;
        this._tamaño= tamaño;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    toString(){
        return `[ID monitor: ${this._idMonitor} Marca: ${this._marca} Tamaño: ${this._tamaño}]`
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        return this._marca=marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        return this._marca = tamaño;
    }
}
class Computadora{
    static contadorComputadoras=0;
    constructor(nombre,monitor,teclado,raton){
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadoras;
    }
    toString(){
        return `[Computadora: ${this._idComputadora}, Nombre: ${this._nombre} \n${this._monitor} \n${this._teclado} \n${this._raton}]`;
    }
}
class Orden {
    static contadorOrdenes = 0;
    constructor (){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadoresOrden = '';
        for(let computadora of this._computadoras){
            computadoresOrden+=`\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${this._computadoras}`);
    }
}

let raton1 = new Raton('USB','HP');
console.log(raton1.toString());
let raton2 = new Raton('Bluetooth','Sony');
console.log(raton2.toString());

let teclado1 = new Teclado('USB','Dell');
console.log(teclado1.toString());
let teclado2 = new Teclado('Bluetooth','Samsung');
console.log(teclado2.toString());

let monitor1 = new Monitor('Lenovo','24');
console.log(monitor1.toString());
let monitor2 = new Monitor('Sony','29');
console.log(monitor2.toString());

let pc1 = new Computadora('Laptop', monitor1, teclado1, raton1);
console.log(pc1.toString());
let pc2 = new Computadora('Escritorio',monitor2,teclado2,raton2);
console.log(pc2.toString());

let orden1 = new Orden();
orden1.agregarComputadora(pc1);
orden1.agregarComputadora(pc2);
orden1.agregarComputadora(pc1);
orden1.mostrarOrden();