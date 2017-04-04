function getNum () {
    var numero = parseInt(prompt('Ingrese un numero: '));
    return numero;
}

function esPrimo (numero) {
    var contador = 0;

    for (var i = 1; i <= numero; i++) {
        if (numero%i === 0) {
            contador += 1;
        }
    }

    return contador;
}

function showResult (contador) {

    if (contador < 3) {
        alert('El numero es primo');
    } else {
        alert('El numero no es primo');
    }

}

showResult (esPrimo(getNum()));