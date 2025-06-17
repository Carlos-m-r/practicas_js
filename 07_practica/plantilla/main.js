let num1 = Number(prompt("introduzca un número"));
let num2 = Number(prompt("introduzca otro número"))


while (isNaN(num1) || isNaN(num2) ){
    if (isNaN(num1)) {
        num1 = Number(prompt("Ingrese de nuevo el primer número"));
    } else {
        num2 = Number(prompt("Ingrese de nuevo el segundo número"));
    }
}

alert('la suma de ambos dígitos es: ' + Number(num1 + num2));