function calcu(){
//Recuperar datos
let num1 = document.getElementById('operando1').value;
let num2 = document.getElementById('operando2').value;
let op = document.getElementById('operacion').value;
let resultado=0;

//Si es vacío el select
if(op == ''){
    document.getElementById('exito').className = 'alert alert-danger';
    document.getElementById('exito').innerHTML= 'Debe seleccionar una operación.';
}
//Suma
else if(op=='Suma'){
    if(isNaN(num1) || isNaN(num2) || num1=='' || num2==''){
    document.getElementById('exito').className = 'alert alert-danger';    
    document.getElementById('exito').innerHTML = `Debe ingresar 2 números.`;
    }
    else{
        resultado = (parseFloat(num1) + parseFloat(num2)).toFixed(2) ;
        document.getElementById('exito').className = 'alert alert-primary';
        document.getElementById('exito').innerHTML = `El resultado de la suma es: ${resultado}`;
    }
}
//Resta
else if(op=='Resta'){
    if(isNaN(num1) || isNaN(num2) || num1=='' || num2==''){
    document.getElementById('exito').className = 'alert alert-danger';    
    document.getElementById('exito').innerHTML = `Debe ingresar 2 números.`;
    }
    else{
        resultado = (parseFloat(num1) - parseFloat(num2)).toFixed(2);
        document.getElementById('exito').className = 'alert alert-primary';
        document.getElementById('exito').innerHTML = `El resultado de la resta es: ${resultado}`;
    }
}
//Multiplicación
else if(op=='Multiplicación'){
    if(isNaN(num1) || isNaN(num2) || num1=='' || num2==''){
    document.getElementById('exito').className = 'alert alert-danger';    
    document.getElementById('exito').innerHTML = `Debe ingresar 2 números.`;
    }
    else{
        resultado = (parseFloat(num1) * parseFloat(num2)).toFixed(2);
        document.getElementById('exito').className = 'alert alert-primary';
        document.getElementById('exito').innerHTML = `El resultado de la multiplicación es: ${resultado}`;
    }
}
//División
else if(op=='División'){
    if(isNaN(num1) || isNaN(num2) || num1=='' || num2==''){
    document.getElementById('exito').className = 'alert alert-danger';    
    document.getElementById('exito').innerHTML = `Debe ingresar 2 números.`;
    }
    else if(num2 == 0){
    document.getElementById('exito').className = 'alert alert-danger';    
    document.getElementById('exito').innerHTML = `Es imposible la división entre 0.`;
    }
    else{
        resultado = (parseFloat(num1) / parseFloat(num2)).toFixed(2);
        document.getElementById('exito').className = 'alert alert-primary';
        document.getElementById('exito').innerHTML = `El resultado de la división es: ${resultado}`;
    }
}

}

