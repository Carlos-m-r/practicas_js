

async function calculateEuroDolar() {
    const api = "https://api.exchangerate-api.com/v4/latest/USD";
    const euro = Number(document.getElementById('euro').value);

    try {
        const response = await fetch(api);
        const data = await response.json();
        const currentEUR = data.rates['EUR']; // Queremos saber cuánto vale 1 USD en EUR

        // Si el usuario ingresa EUR y queremos saber cuántos USD son:
        const result = (euro / currentEUR).toFixed(2);

        document.getElementById('resultDolars').innerText = result + " $";
    } catch (error) {
        console.error("Error al obtener tasas de cambio:", error);
        document.getElementById('resultDolars').innerText = "Error al convertir.";
    }
}


function calculateSpeed() {
    const distance = Number(document.getElementById('distance').value);
    const time = Number(document.getElementById('time').value);

    let result = Number(distance/time).toFixed(2);

    document.getElementById('resultSpeed').innerText = result + 'Km/h';
}

function calculateAreaTrapezium () {
   const base = Number(document.getElementById('baseTrapezium').value);
   const base2 = Number(document.getElementById('secondBaseTrapezium').value);
   const altura = Number(document.getElementById('heightTrapezium').value);

    let result = Number(Number(base + base2) / Number(altura*2)).toFixed(2);

    document.getElementById('resultArea').innerText = 'El área es: ' + result;   
}

function calculateMultiplyTable() {

    //Comprobamos si input es null para que no se acabe tomando por defecto 0
    const input = document.getElementById('number').value;

    if(input == '') {
        return;
    }

    //Funcion
    const number = Number(document.getElementById('number').value);
 
    let array = [];
    let tableDoc = document.createElement("table");
    
    //Montamos array de valores
    for (let index = 1; index < 11; index++) {
        array.push(number + ' X ' + index + ' = ' + Number(number*index))
    }

    console.log(array)

    //Recorremos array para montar cada row y cell
    for (let index = 0; index < array.length; index++) {
        let row = tableDoc.insertRow(index);
        row.insertCell().innerHTML = array[index];
    }

   let result = tableDoc;
   
   document.getElementById('resultMultiplyTable').innerHTML = '';
   document.getElementById('resultMultiplyTable').append(result);
}

function calculateDivisibilidad() {
    const dividendo = Number(document.getElementById('dividendo').value);
    const divisor = Number(document.getElementById('divisor').value);

    let result =  Number(dividendo % divisor) === 0 ? 'divisible' : 'no divisible';

    document.getElementById('resultDivisible').innerText = result;
}