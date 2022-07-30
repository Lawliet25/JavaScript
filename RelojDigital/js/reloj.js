const mostrarReloj = ()=>{

    //Definiendo horas
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    //Definiendo meses yaño
    let meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    let dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = formatoHora(fecha.getDate());
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia} ${mes} ${año}`;
    
    document.getElementById('hora').innerHTML= `${hora}:${minutos}:${segundos}`;
    document.getElementById('fecha').innerHTML= fechaTexto;
    setInterval(mostrarReloj,1000);
}

const formatoHora = (recibirFecha)=>{
    if(recibirFecha<10){
        recibirFecha = '0' + recibirFecha;
    }
    return recibirFecha;    
};