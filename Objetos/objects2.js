let persona = {
    
    //Definiendo atributos
    nombre: "Juan",
    apellido: "Ramírez",
    email: "jram@gmail.com",
    edad: 28,
    idioma: 'es',

    //Definiendo métodos
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma=lang.toUpperCase();
    }

}
console.log(persona.lang);
persona.lang= 'en';
console.log(persona.lang);
