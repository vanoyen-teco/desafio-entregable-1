/*
Declaracion inicial
*/
let totalIteration;
let inicio;
let totalBill = 0;

/*
Funciones
*/
function setCantidad(){
    totalIteration = prompt('Ingrese cantidad de productos')
    return validateNumber(totalIteration);
}
function validateNumber(number){
    if(number === "" || number === undefined || number === null || isNaN(number)){
        return false;
    }else{
        return true;
    }
}

do{
    inicio = setCantidad();
}while(!inicio);

for(let i = 1; i <= parseInt(totalIteration); i++){
    let number;
    do{
        number = prompt(`Ingrese precio del producto ${i}`);
    }while(!validateNumber(number));
    totalBill += parseFloat(number);
};

alert(`El total es: ${totalBill}`);