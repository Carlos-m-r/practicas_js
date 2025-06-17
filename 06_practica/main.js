function calculatePerimeter () {

    base = parseFloat(document.getElementById('base').value);
    altura = parseFloat(document.getElementById('altura').value);

    let result = parseFloat(((base * 2) + (altura *2)));

    document.getElementById('resultPerimeter').innerText = 'El perímetro es: ' + result;
}


function calculateFarenheit() {
    celsius = parseFloat(document.getElementById('celsius').value);

    let result = parseFloat((celsius * 9/5) + 32)

    document.getElementById('resultFarenheit').innerText = 'El valor en Farenheit es: ' + result;

}

function calculateArea () {
    base = parseFloat(document.getElementById('base').value);
    altura = parseFloat(document.getElementById('altura').value);

    let result = parseFloat(((base * altura) / 2));

    document.getElementById('resultArea').innerText = 'El área es: ' + result;
}

function calculateCircumference() {
    radio = parseFloat(document.getElementById('radio').value);

    let result = parseFloat((2 * Math.PI) * radio);

    document.getElementById('resultCircumference').innerText = 'La circunferencia es: ' + result;
}

function calculateDiscount() {
    price = parseFloat(document.getElementById('price').value);
    discount = parseFloat(document.getElementById('discount').value);

    let baseDiscount = (price * (discount / 100));



    let result = parseFloat(price - baseDiscount);

    document.getElementById('resultDiscount').innerText = 'El precio con descuento es: ' + result + '€';
}



