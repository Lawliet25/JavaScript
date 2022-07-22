//Promesas con setTimeout, async y await

async function funcionPromesa() {
    let promesaFinal=new Promise((resolve) => {
       setTimeout(()=>resolve('Hola, soy la combinación de todo'),5000); 
    });
    console.log(await promesaFinal);
}
funcionPromesa();