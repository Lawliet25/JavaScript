let miFuncionFlecha = () => {
    console.log('Hola, esta es una función flecha');
}
miFuncionFlecha();

let operacionesFlecha = (num1,num2) =>{
    
        let suma = num1 +num2;
        let multiplicaion = num1*num2;
        let resta = num1 - num2;
        let division;

        if(num2==0){
        division = console.log('Operación inválida');
        } else{
        division = num1/num2;
        }
        
        return `        La suma de los números ${num1} y ${num2} es: ${suma}\n
        La resta de los números ${num1} y ${num2} es: ${resta}\n
        La multiplicación de los números ${num1} y ${num2} es: ${multiplicaion}\n
        La división de los números ${num1} y ${num2} es: ${division}\n`;  
    }

    console.log(operacionesFlecha(5,4));
    


