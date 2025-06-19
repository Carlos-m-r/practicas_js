//1. Cada clic añade 200 ml de agua hasta 2 L; muestra el total.
function addWater() {
   let waterValue = document.getElementById('totalWater').innerText;
   let quantitySymbol = document.getElementById('quantitySymbol').innerText;

   console.log(quantitySymbol.localeCompare('ml'));

   if(waterValue < 1000 && quantitySymbol.localeCompare('ml') == 0) {
      waterValue = Number(waterValue) + 200;
      if(waterValue == 800){
         waterValue = 1;
         document.getElementById('quantitySymbol').innerText = 'L';
      }
   } else {
      if(waterValue < 2 && quantitySymbol.localeCompare('L') == 0){
         waterValue = (Number(waterValue) + 0.2).toFixed(2);
      }else {
         document.getElementById('bucketImg').setAttribute('src','assets/img/bucket.png');
         return;
      }
   }
   
   document.getElementById('bucketImg').setAttribute('src','assets/img/bucketDrop.png');
   document.getElementById('totalWater').innerText = waterValue;

}


//4. LISTA DINÁMICA
function addItem() {
   const item = document.getElementById('inputItem').value;   
   let list = document.getElementById('itemsList');
   let ul = createUl(list);
   //Una vez exista el ul generamos li y lo añadimos
   createLiElement(ul, item);
}

//Si no existe se genera un elemento ul
function createUl(list) {
   if(list.children.length == 0) {
      list.appendChild(document.createElement('ul'));
   }
   return list.firstChild;
}

//Generamos el elemento li con su contenido
function createLiElement(ul, item) {
 let element = ul.appendChild(document.createElement('li'))
 element.setAttribute('id', item+'Li');
 element.innerText = item;
 element.append(createButton(item+'Li'));
}

//generar botón
function createButton (identifier) {
   let button = document.createElement('button');
   button.appendChild(document.createTextNode('Eliminar'));
   button.onclick = function () {
      removeItem(identifier);
   } 
   return button;
}

//función del botón
function removeItem(identifier) {
   console.log(document.getElementById(identifier));
   document.getElementById(identifier).remove();
}



//Timer
function initTimer() {
    let seconds = parseInt(document.getElementById('inputSeconds').value, 10);
    let currentTime = 0;

    const intervalId = setInterval(() => {
        if (currentTime < seconds) {
            document.getElementById('timeCount').innerText = currentTime + '\'\'';
            currentTime++;
        } else {
            clearInterval(intervalId);
            onEnd('timeCount');
        }
    }, 1000);
}

//Cuenta Atrás
function initCountdown() {
   let seconds = parseInt(document.getElementById('inputSecondsCountdown').value, 10);

   const intervalId = setInterval(() => {
      if (seconds > 0) {
         document.getElementById('timeCountdown').innerText = seconds + '\'\'';
         seconds--;
      } else {
         clearInterval(intervalId);
         onEnd('timeCountdown');
      }
   }, 1000);
}

function onEnd(element) {
   document.getElementById(element).innerText = '¡Tiempo!';
}

