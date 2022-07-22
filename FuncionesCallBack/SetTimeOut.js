let imp = function mensajeTiempo(){
    console.log("Hola, después de 3 segundos");
}

imp2 = () =>{
    console.log("Hola, después de 5 segundos");
}

setTimeout(imp,3000);
setTimeout(imp2,5000);