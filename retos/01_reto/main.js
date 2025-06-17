function calculatePerimeter () {
   const base = Number(document.getElementById('base').value);
   const altura = Number(document.getElementById('altura').value);

    let result = Number(((base + altura ) *2)).toFixed(2); 

    document.getElementById('resultPerimeter').innerText = 'El perímetro es: ' + result;
}


function calculateFarenheit() {
    const celsius = Number(document.getElementById('celsius').value);

    let result = Number((celsius * 9/5) + 32).toFixed(2);

    document.getElementById('resultFarenheit').innerText = 'El valor en °F es: ' + result;
}

function calculateArea () {
   const base = Number(document.getElementById('baseTriangle').value);
   const altura = Number(document.getElementById('alturaTriangle').value);

    let result = Number(((base * altura) / 2)).toFixed(2);

    document.getElementById('resultArea').innerText = 'El área es: ' + result;   
}

function calculateCircumference() {
   const radio = Number(document.getElementById('radio').value);

    let result = Number((2 * Math.PI) * radio).toFixed(2);

    document.getElementById('resultCircumference').innerText = 'La circunferencia es: ' + result;
}

function calculateDiscount() {
    const price = Number(document.getElementById('price').value).toFixed(2);
    const discount = Number(document.getElementById('discount').value);

    let baseDiscount = (price * (discount / 100));
    let result = Number(price - baseDiscount).toFixed(2);

    document.getElementById('resultDiscount').innerText = 'El precio con descuento es: ' + result + '€';
}