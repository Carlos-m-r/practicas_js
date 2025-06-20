function showPass() {  
    let currentPass = document.getElementById('inputPass');

    if(currentPass.getAttribute('type') == 'password'){
        currentPass.setAttribute('type', 'text');
    } else {
        currentPass.setAttribute('type', 'password');
    }
    console.log(currentPass);
}


//copy text  
document.getElementById('inputText').addEventListener('input', function () {
    const inputValue = this.value;
    document.getElementById('outputText').value = inputValue;
});



function showTime() {
    const timeNow = new Date().toLocaleTimeString();
    const clock = document.getElementById('clock');
    if (clock) {
        clock.textContent = timeNow;
    }
}

setInterval(showTime, 1000);


function addClick() {
    const img = document.getElementsByClassName('clicker')[0];

    // Cambiamos imagen
    if (img.getAttribute('src') === 'assets/img/bucket.png') {
        img.setAttribute('src', 'assets/img/bucketDrop.png');
    } else {
        img.setAttribute('src', 'assets/img/bucket.png');
    }

    // Incrementamos el contador de clics
    const total = document.getElementById('totalClicks');
    total.textContent = Number(total.textContent) + 1;
    
}