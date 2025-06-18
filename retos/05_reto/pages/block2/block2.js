//1. Calcula el precio de la entrada al cine según la edad (niño, adulto, senior).
function calculateCinemaTarif() {
    //const baseTarif = Number(document.getElementById('inputBaseTarif').value);
    const age = document.getElementById('inputAge').value;

    if(age == ''){
        document.getElementById('resultTarif').innerText = 'Introduzca un valor válido';
        return;
    }

    let category = '';
    let price = 0;

    if (age < 12) {
        category = 'niño';
    } else if (age >= 65) {
        category = 'senior';
    } else {
        category = 'adulto';
    }

    switch (category) {
        case 'niño':
            price = 3.5;
            break;
        case 'senior':
            price = 2.75;
            break;
        default:
            price = 6.75;
            break;
    }

    document.getElementById('resultTarif').innerText = 'El precio de un ' + category +' es de: ' + price + '€';
}
//2. Pide una hora (0–23) y saluda con “¡Buenos días!”, “¡Buenas tardes!” o “¡Buenas noches!”.
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
//3. Adivinanza.
function loadPassword() {
    const passwords = [
        {text:'Tengo agujas y no sé coser, doy las horas y no sé leer.', answer:'reloj'},
        {text:'Sube llena, baja vacía, y si no se apura, la sopa se enfría', answer:'cuchara'},
        {text:'¿Qué se hace más grande cuanto más le quitas?', answer:'agujero'}
    ];

    const random = Number(Math.floor(Math.random() * passwords.length));

    console.log(random)

    document.getElementById('passwordText').innerText = passwords[random].text;
    document.getElementById('passwordAns').innerText = passwords[random].answer;
}


function checkPassword() {
    const input = document.getElementById('inputResponse').value;


    console.log(document.getElementById('passwordAns').innerText);
    
    if (input == document.getElementById('passwordAns').innerText) {
        document.getElementById('resultPassword').innerText = '¡Correcto!';
    } else {
        document.getElementById('resultPassword').innerText = '¡Incorrecto!';
    }

    
}

//4. Solicita palabras hasta que el usuario deje de escribir (prompt hasta “cancelar”).


//5. Convierte un importe en euros a USD, GBP o JPY según opción.
