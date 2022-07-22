function imprimir(mensaje){
    console.log(mensaje);
}

function funcionCallBack(op1,op2,funcionImprimir){
    let resultado = op1+op2;
    funcionImprimir(`El resultado de la suma es: ${resultado}`);
}
funcionCallBack(8,4,imprimir);