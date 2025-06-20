//Asegura que los elementos que usemos existan en el DOM
/*document.addEventListener('DOMContentLoaded', () =>{
    //filtramos por #id y tipo de elemento
    const buttons = document.querySelectorAll('#filter button');
    
    //filtramos por clase
    const cards = document.querySelectorAll('#cardArt');

    //recorremos los botones y le asignamos una función al clickar
    buttons.forEach(button => {
        button.addEventListener('click', () =>{
            
            //Al pulsar un botón eliminamos el 'active'
            //Solo el pulsado queda activo
            buttons.forEach(b  => b.classList.remove('active'));
            
            //añadimos active al botón pulsado para que se remarque visual
            button.classList.add('active');

            //leemos la categoría asociada al boton a traves de data-cat
            const cat = button.dataset.cat;

            //Recorre para mostar/ocultar segun 'cat'
            cards.forEach(card => {
                //si cat es all -> muestra todo
                if(cat === 'all' || card.dataset.cat === cat) {
                    card.style.display = 'block';
                    
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
});
*/


//fix
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("#filter button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const container = document.getElementById("mainContent");
            container.innerHTML = "";
            
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedCat = button.getAttribute("data-cat");
            const cards = document.querySelectorAll(".card");

            cards.forEach(card => {
                if (selectedCat === "all" || card.dataset.cat === selectedCat) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});




function loadContent(number) {  
    const container = document.getElementById("mainContent");

    // Limpiar contenido anterior
   // container.innerHTML = '';


    // Cargar HTML
    fetch(`pages/0${number}_reto/index.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar la página.");
            }
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;

            // Cargar JS dinámicamente
            const script = document.createElement("script");
           
            script.src = `pages/0${number}_reto/main.js`;
            script.type = "text/javascript";
            document.body.append(script);
        })
        .catch(error => {
            container.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}