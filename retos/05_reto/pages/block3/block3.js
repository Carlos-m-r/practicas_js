//1. Pide cuántos invitados habrá y genera una lista “Invitado 1”,…,“Invitado n”.
function printGuests() {
   const guestNumber = document.getElementById('inputGuest').value;
   let guests = ''

   for (let index = 0; index < guestNumber; index++) {
    guests += 'Invitado ' + Number(index+1) + '\n'
   }

   document.getElementById('resultList').innerText = guests
}

//2. Pide una contraseña hasta que tenga al menos 6 caracteres.
function checkPassSecurity() {
   document.getElementById('resultCheck').innerText = document.getElementById('passInput').value.length >= 6 ? 'Correcto' : 'Tiene menos de 6 caracteres'
}