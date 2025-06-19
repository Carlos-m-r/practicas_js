//1. Calculadora de dtos:

console.log('Ejercicio1.\n' + discountCalculator(10, 25))

function discountCalculator(basePrice, discountPercentage) {
    let discountedQuantity = basePrice * (discountPercentage / 100);
  
    return('Te ahorras: ' + discountedQuantity + '\nPrecio final:' + Number(basePrice - discountedQuantity));
}