class Producto{
    static contadorProductos=0;
    constructor(nombre, precio){
        this._idproducto=++Producto.contadorProductos;
        this._nombre=nombre;
        this._precio=precio;
    }

    get idproducto(){
        return this._idproducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre=nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        return this._precio=precio;
    }
    toString(){
        return 'ID: '+this._idproducto + ', Nombre: ' + this._nombre +  ', Precio: $' + this._precio;
    }
}

class Orden{
    static constadorOrdenenes=0;
    static get MAX_PRODUCTS(){
        return 5;
    }
    constructor(){
        this._idorden=++Orden.constadorOrdenenes;
        this._productos = [];
        //this._contadorProductosAgregados=0;
    }

    get idorden(){
        return this._idorden;
    }
    agergarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTS){
            this._productos.push(producto)
        }
        else{
            console.log("No se pueden agregar más productos.")
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden+=producto.toString() + ' ';
        }
    console.log('Orden: ' + this._idorden + ' Total: ' + this.calcularTotal()+ '\nProductos: ' + productosOrden+'\n');
    }
}
producto1 = new Producto('Pantalón', 200);
producto2 = new Producto('Camisa', 500);

let orden1 = new Orden();
orden1.agergarProducto(producto1);
orden1.agergarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let prodcuto3=new Producto('Cinturón',50);
orden2.agergarProducto(prodcuto3);
orden2.agergarProducto(producto1);
orden2.agergarProducto(producto2);
orden2.mostrarOrden();