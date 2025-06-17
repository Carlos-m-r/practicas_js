function calculatePithagoras () {
   const cateto1 = Number(document.getElementById('cateto1').value);
   const cateto2 = Number(document.getElementById('cateto2').value);
   
   let result = Number(Math.sqrt(Math.pow((cateto1+cateto2), 2))).toFixed(2);
   
   document.getElementById('resultPithagoras').innerText = 'La hipotenusa es: ' + result;
}


function calculateMiles() {
    const km = Number(document.getElementById('km').value);

    let result = Number(km * 0.621371).toFixed(2);

    document.getElementById('resultMiles').innerText = result + ' millas';
}

function calculateArea () {
   const base = Number(document.getElementById('baseTriangle').value);
   const altura = Number(document.getElementById('alturaTriangle').value);
   
   let result = Number(((base * altura) / 2)).toFixed(2);
   
   document.getElementById('resultArea').innerText = 'El área es: ' + result;   
}

function calculateVolume() {
   const radioCilinder = Number(document.getElementById('radioCilinder').value);
   const alturaCilinder = Number(document.getElementById('alturaCilinder').value);
   
   let result = Number((Math.PI * Math.pow(radioCilinder,2) * alturaCilinder)).toFixed(2);
   
   document.getElementById('resultVolume').innerText = 'El volumen es: ' + result;
}

function calculateIMC() {
    const weight = Number(document.getElementById('weight').value);
    const height = Number(document.getElementById('height').value);

    let result = Number(weight/Math.pow(height,2)).toFixed(2);

    document.getElementById('resultIMC').innerText = 'El IMC es: ' + result;
}

function calculateEvenOrOdd() {
    const number = Number(document.getElementById('number').value);

    let evenOdd = (number % 2 === 0) ? 'par' : 'impar';
    let result = 'El número ' + number + ' es ' + evenOdd;

    document.getElementById('resultEvenOrOdd').innerText = result;
}
