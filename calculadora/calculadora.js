var termino1 = parseInt(prompt('ingrese primer termino:'));
var operacion = prompt('ingrese: operacion +,-,/,*');
var termino2 = parseInt(prompt('ingrese segundo termino'));

function getResult (num, op, num2) {
   var result = 0;
    switch (op) {

        case '+':
            result = num + num2;
        break;

        case '-':
            result = num - num2;
        break;

        case '/':
            result = num / num2;
        break;

        case '*':
            result = num * num2;
        break;

        default:
            alert('Operacion incorrecta');
        break;
    
    }

    return result;
}

function  showResult (result) {
    alert(result);
} 

resultado = getResult(termino1, operacion, termino2);

showResult(resultado);
