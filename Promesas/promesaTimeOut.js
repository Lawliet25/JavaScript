let promesaTime = new Promise((resolved)=>{
    
    setTimeout(()=>{
        resolved('Hola, soy la promesa desde setTimeOut luego de 3 segundos');
    },3000)
});
console.log('Hola, aparecerá una promesa en 3 segundos');
promesaTime.then(valor=>console.log(valor));

//Async

async function miFuncionAsync() {
    return ('Hola, soy una promesa con async');
}

miFuncionAsync().then(valor=>console.log(valor));

//Async con Await

async function funcionConAwait() {
    let promesa5 = new Promise((resolved)=>{
        resolved('Hola Await');
    });
    console.log(await promesa5);
}
funcionConAwait();

