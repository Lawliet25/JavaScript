let miPromesa = new Promise((resolved,rejected)=>{
    let activador = false;

    if(activador==true){
        resolved('Activación exitosa');
    }
    else{
        rejected('Error en la activación');
    }
});

miPromesa
    .then(exito=>console.log(exito))
    .catch(error=>console.log(error));
