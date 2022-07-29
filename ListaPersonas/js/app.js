
let personas = [
    new Persona('Rodrigo','Valle',22),
    new Persona('Oscar','Bonilla',25),
    new Persona('Naomi','Guardado',20),
];

function mostrarPersons(){
    console.log('Mostrando personas...');
    let texto = '';
    //Iteramos array de personas y creamos las filas
    for (const persona of personas) {
        console.log(persona);
        texto += `<tr><td>${persona.idPersona}</td>
        <td>${persona.nombre}</td>
        <td>${persona.apellido}</td>
        <td>${persona.edad}</td></tr>`;
    }
    document.getElementById('tabla').innerHTML=texto;
}
function agregarPersona(){
    //Capturamos datos del form
    let formu = document.forms['formu'];
    let nombre = formu['nombre'].value;
    let apellido = formu['apellido'].value;
    let edad = formu['edad'].value;

    if (nombre!='' && apellido!='' &&edad!='') {
    const persona = new Persona(nombre,apellido,edad);
    personas.push(persona);
    console.log(persona);
    mostrarPersons();
    //Alerta de éxito
    document.getElementById('pizarra').className='alert alert-success';
    document.getElementById('pizarra').innerHTML='Persona registrada correctamente.'
    }else{
        //Alerta fracaso
        document.getElementById('pizarra2').className='alert alert-danger';
        document.getElementById('pizarra2').innerHTML='Debe llenar todos los campos.'
    }
    
}