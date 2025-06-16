let numCuenta = true;
let dinero = 150;
let saldo = 1500;

if (numCuenta) {
    saldo += dinero;
    console.log('Ingreso aceptado. Saldo actual: ' + saldo);
} else {
    console.log ('Cuenta no registrada no se puede realizar el ingreso');
}