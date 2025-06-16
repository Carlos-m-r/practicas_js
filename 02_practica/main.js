function checkEvenOdd() {
    const input = document.getElementById('inputNumber').value; //buscamos value por ID del elemento
    const number = parseInt(input, 10);

    let evenOdd = '';
    evenOdd = (number % 2 === 0) ? 'par' : 'impar';
    let result = 'El número ' + input + ' es ' + evenOdd;
    
    console.log(result);

    document.getElementById('result').innerText = result;
}
