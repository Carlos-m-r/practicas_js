function checkPositiveNegativeZero() {
    const input = document.getElementById('inputNumber').value; //buscamos value por ID del elemento
    const number = parseInt(input, 10);

    let negativePositiveZero = (number > 0) ? 'positivo' : (number < 0) ? 'negativo' : 'cero';

    let result = 'El número es ' + negativePositiveZero;
    
    console.log(result);

    document.getElementById('result').innerText = result;
}


/* Forma ifelse con validación de Nan 

let number = parseInt(prompt('Introduzca un número'))
let logText = 'El número ' + number;

if (isNaN(number)) {
    console.log('Introduce un número válido')
} else {
    if (number > 0) {
        console.log(logText + ' es positivo')
    } else if (number < 0) {
        console.log(logText + ' es negativo')
    } else {
        console.log(logText + ' es cero')
    }
}

*/