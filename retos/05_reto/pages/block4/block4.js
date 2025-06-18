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
         document.getElementById('bucketImg').setAttribute('src','img/bucket.png');
         return;
      }
   }
   
   document.getElementById('bucketImg').setAttribute('src','img/bucketDrop.png');
   document.getElementById('totalWater').innerText = waterValue;

}
