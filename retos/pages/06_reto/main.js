
function registerUser() {

    const nombre = document.getElementById('inputName').value;
    const email = document.getElementById('inputMail').value;
    const edad = parseInt(document.getElementById('inputAge').value);


    let user = setUser(nombre, email, edad);

    submit(user);
}

function setUser(nombre, email, edad) {
    let user = {
        nombre: '',
        email: '',
        edad: 0
    };

    user.nombre = nombre;
    user.email = email;
    user.edad = edad;

    return user;
}



function submit(user) {

    console.log(user)
    alert('Registro correcto')
    document.getElementById('outputName').value = user.nombre;
    document.getElementById('outputMail').value = user.email;
    document.getElementById('outputAge').value = user.edad;
}



function registerExpense() {
    //Definimos el objeto 'item'
    let item = {
        description: '',
        quantity: 0
    }

    //asignamos los valores al objeto
    item.description = document.getElementById('inputExpenseText').value;
    item.quantity = Number(document.getElementById('inputExpenseQuantity').value);

    console.log(item)

    let list = document.getElementById('expensesList');
    let ul = createUl(list);
    //Una vez exista el ul generamos li y lo añadimos
    createLiElement(ul, item);

    //Añadimos la cantidad al total
    let totalExpensesQuantity = Number(document.getElementById('totalExpenses').textContent) + item.quantity;

    document.getElementById('totalExpenses').innerText = totalExpensesQuantity;
}

//Si no existe se genera un elemento ul
function createUl(list) {
    if (list.children.length == 0) {
        list.appendChild(document.createElement('ul'));
    }
    return list.firstChild;
}

//Generamos el elemento li con su contenido
function createLiElement(ul, item) {
    let li = ul.appendChild(document.createElement('li'));
    li.setAttribute('id', item.description + 'Li');


    console.log('item', item)


    //Descripción
    let descriptionSpan = li.appendChild(document.createElement('span'))
    descriptionSpan.setAttribute('id', item.description + 'Span')
    descriptionSpan.textContent = item.description + ': ';

    //Cantidad
    let amountSpan = li.appendChild(document.createElement('span'))
    amountSpan.setAttribute('id', item.description + 'AmountSpan')
    amountSpan.textContent = + item.quantity



    //Añadimos el símbolo € al final del elemento
    li.insertAdjacentText('beforeend', '€');



    //Añadimos botón
    li.append(createButton(item.description + 'Li'));
}



//generar botón
function createButton(identifier) {
    let button = document.createElement('button');
    button.appendChild(document.createTextNode('Eliminar'));
    button.onclick = function () {
        removeItem(identifier);
    }
    return button;
}

//función del botón
function removeItem(identifier) {
    let childIdentifier = identifier.replace('Li', 'AmountSpan')
    let element = document.getElementById(childIdentifier);
    let totalExpensesQuantity = Number(document.getElementById('totalExpenses').textContent) - Number(element.textContent);


    document.getElementById('totalExpenses').innerText = totalExpensesQuantity;
    document.getElementById(identifier).remove();
}


//Galería de imágenes
const images = ['assets/img/bucket.png', 'assets/img/bucketDrop.png']

let current = 0;

const photoElm = document.getElementById('photo')
const prevBtn = document.getElementById('previousButton');
const nextBtn = document.getElementById('nextButton');


function changeImage() {
    photoElm.src = images[current];
}


prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    changeImage();
});

nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    changeImage();
});



//API TIEMPO
async function getWeather() {
    const apiKey = '7f08e605885b40788a2113519252006';
    const city = document.getElementById('cityInput').value.trim();
    const weatherResponse = document.getElementById('weatherResponse');

    if (!city) {
        weatherResponse.textContent = 'Introduce una ciudad';
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}` + `&q=${encodeURIComponent(city)}&lang=es`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            weatherResponse.textContent = `Error: ${data.error.message}`;
            return;
        }

        const temp = data.current.temp_c;
        const desc = data.current.condition.text;
        const icon = data.current.condition.icon;
        const location = data.location.name;

        weatherResponse.innerHTML = `
        <p>
            <img src="${icon}" alt="${desc}" width=35 height=35>
            En <strong>${location}</strong> hay <strong>${temp}&deg;</strong>
        </p>
        `;
    } catch (error) {
        weatherResponse.textContent = 'No pudieron obtenerse datos';
        console.error(error.message);
    }
}