function calculateEuroDolar () {
   const euro = Number(document.getElementById('euro').value);
   
   let result = Number(euro * 1.16).toFixed(2); 
   
   document.getElementById('resultDolars').innerText = result + "$";
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

    const number = Number(document.getElementById('number').value);

    console.log(number)

    if(isNaN(number)) {
        return;
    }
    
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

    let result =  Number(dividendo % divisor) == 0 ? 'divisible' : 'no divisible'

    document.getElementById('resultDivisible').innerText = result;
}