function calculatePositiveNegative() {
    const inputNumber = Number(document.getElementById('inputNumber').value);

    
    let response = inputNumber > 0 ? 'Positivo' : inputNumber < 0 ? 'Negativo' : 'Cero';

    document.getElementById('resultResponse').innerText = response;
}


function whichFruit() {
    const inputNumber = Number(document.getElementById('fruitNumber').value);

    let switchValue = '';
    switch (inputNumber) {
        case 1:
            switchValue = 'Manzana';
            break;
        case 2:
            switchValue = 'Banana';
            break;
        case 3:
            switchValue = 'Naranja';
            break;
        default:
            switchValue = 'Opción inválida'
            break;
    }

    document.getElementById('resultFruit').innerText = switchValue;
}


function calculateSum() {
    const inputNumber = Number(document.getElementById('sumValue').value);
    
    let sumValues = 0;

    if (inputNumber <= 0) {
        document.getElementById('resultSum').innerText = 'Valor inválido elija otro';
    } else {
        for (let index = 0; index < inputNumber+1; index++) {
            sumValues += index;    
        }
        document.getElementById('resultSum').innerText = 'Suma total ' + sumValues 
    }
}

function showCountdown() {
    const inputNumber = Number(document.getElementById('countdownInput').value);
    
    let sumValues = '';

    if (inputNumber <= 0) {
        document.getElementById('resultCountdown').innerText = 'Valor inválido elija otro';
    } else {
        for (let index = inputNumber; index >= 0; index--) {
            if(index > 0){
                sumValues += index + ', '; 
            } else {
                sumValues += index
            } 
        }
        document.getElementById('resultCountdown').innerText = 'Cuenta atrás: ' + sumValues 
    }
}


function holaGame() {
        let gameString = 'Introduzca una palabra';
        let inputWord = '';
    do {
        inputWord = prompt(gameString);
        gameString = 'No es correcta. introduzca otra';
    } while (inputWord != 'hola');

    alert('¡CORRECTO!')
}