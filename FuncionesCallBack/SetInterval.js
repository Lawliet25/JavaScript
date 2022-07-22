let funcionReloj = function(){
    let reloj = new Date();
    console.log(`${reloj.getHours()}:${reloj.getMinutes()}:${reloj.getSeconds()}`);
}
setInterval(funcionReloj,2000);