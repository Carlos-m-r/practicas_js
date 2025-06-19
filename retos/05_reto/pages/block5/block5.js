function showPass() {  
    let currentPass = document.getElementById('inputPass');

    if(currentPass.getAttribute('type') == 'password'){
        currentPass.setAttribute('type', 'text');
    } else {
        currentPass.setAttribute('type', 'password');
    }
    console.log(currentPass);
}


  
document.getElementById('inputText').addEventListener('input', function () {
    const inputValue = this.value;
    document.getElementById('outputText').value = inputValue;
});