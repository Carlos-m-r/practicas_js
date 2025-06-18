function calculateTarif() {
    const baseTarif = Number(document.getElementById('inputBaseTarif').value);
    const priceKm = Number(document.getElementById('inputKmPrice').value);
    const traveledKm = Number(document.getElementById('inputTraveledKm').value);

    let result = (baseTarif + (priceKm * traveledKm));

    document.getElementById('resultTarif').innerText = 'El total del viaje: ' + result + '€';
}

function calculateIMC() {
    const weight = Number(document.getElementById('weight').value);
    const height = Number(document.getElementById('height').value);

    let result = Number(weight / Math.pow(height, 2)).toFixed(2);
    let category = '';

    if(isNaN(result)) {
        document.getElementById('resultIMC').innerText = 'introduza valores válidos';
      return;
    }
       
    if (result <= 18.5) {          
        category = 'Bajo peso';      
    } else if (result <= 24.9) {          
        category = 'Peso normal';     
    } else if (result <= 29.9) {         
        category = 'Sobrepeso';     
    } else {
        category = 'Obesidad';
    }
    document.getElementById('resultIMC').innerText = 'El IMC es: ' + result + ' estaría dentro de la categoria: ' + category;
}

function validateMail() {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const input = document.getElementById('inputMail').value;

    let response = pattern.test(input) ? 'Válido' : 'No válido';

    document.getElementById('resultValidation').innerText = response;
}



function fibonacci() {
    const input = Number(document.getElementById('fiboInput').value);

    console.log('input: ' + input);

    let initialValue = 0;
    let lastValue = 1;
    let aux;

    let values = '';

    for (let index = 0; index < input; index++) {
        values += Number(initialValue + lastValue)

        aux = initialValue;
        initialValue += lastValue
        lastValue = aux

        if (index != Number(input - 1)) {
            values += ', '
        }
    }

    document.getElementById('resultFibo').innerText = values;
}


function messageMult() {
    const message = document.getElementById('messageInput').value;
    const times = Number(document.getElementById('timesInput').value);
    document.getElementById('resultMessage').innerHTML = '';

    for (let index = 0; index < times; index++) {
        let paragraph = document.createElement('p');
        paragraph.innerText = message;
        document.getElementById('resultMessage').append(paragraph)
    }
}