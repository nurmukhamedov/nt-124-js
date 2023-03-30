// const form = document.querySelector('.form'),
//     name = document.querySelector('#name'),
//     price = document.querySelector('#price'),
//     itemId = document.querySelector('#itemId'),
//     itemList = document.querySelector('.itemList');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (itemId.value) {

//         item = JSON.parse(localStorage.getItem(itemId.value));
//         item.name = name.value;
//         item.price = price.value

//     } else {

//         item = {
//             name: name.value,
//             price: price.value
//         }
//         itemId.value = Date.now();
//     }
//     localStorage.setItem(itemId.value, JSON.stringify(item));
//     form.reset();
//     itemId.value = '';
//     render();
// })

// function render() {
//     itemList.innerHTML = ''

//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             const item = JSON.parse(localStorage.getItem(key))
//             const li = document.createElement('li');
//             li.innerHTML = `<span>Name: ${item.name}</span> <span>Price: $${item.price}</span>`;
//             itemList.appendChild(li);

//             const editButton = document.createElement('button');
//             editButton.textContent = 'Edit';
//             li.appendChild(editButton);

//             editButton.addEventListener('click', () => {
//                 name.value = item.name;
//                 price.value = item.price;
//                 itemId.value = key;
//             })

//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = 'Delete';
//             li.appendChild(deleteButton);

//             deleteButton.addEventListener('click', () => {
//                 localStorage.removeItem(key);
//                 render();
//             });
//         }
//     }
// }

// render();


// const box = document.querySelector('.box');

// const text1 = document.createElement('p')
// const text2 = document.createElement('p')
// const text3 = document.createElement('p')

// const myFragment = document.createDocumentFragment();

// myFragment.appendChild(text1);
// myFragment.appendChild(text2);
// myFragment.appendChild(text3);

// box.appendChild(myFragment);
// const myFunc = () => {
//     console.log('Async code');
// }

// setTimeout(myFunc, 2000);

// console.log('Hello World');


// console.log('By World');


// let pizza;

// function orderPizza() {
//     console.log('Order pizza');

//     setTimeout(() => {
//         pizza = 'Pizza'
//     }, 2000);
// }
// orderPizza();
// console.log('Call my friend');

// console.log('Having a shower');

// setTimeout(() => {
//     console.log(`Eating ${pizza}`);
// }, 2500);

const box = document.querySelector('.box');

fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then((data) => data.map((countries) => {
    const img = document.createElement('img');
    img.src = `${countries.flags.png}`
    img.alt = `"${countries.flags.alt}"`

    box.appendChild(img);

    const name = document.createElement('h2');
    name.textContent = countries.name.common;

    box.appendChild(name);

    const capital = document.createElement('h4');
    capital.textContent = countries.capital

    box.appendChild(capital);

    const populationNum = document.createElement('h4');

    const populationInString = String(countries.population);

    if (populationInString.length === 6) {
        populationNum.textContent = `${populationInString.slice(0, 3)}k`;
        box.appendChild(populationNum)
    } else {
        populationNum.textContent = populationInString;
        box.appendChild(populationNum);
    }
}))
