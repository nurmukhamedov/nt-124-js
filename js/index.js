// const books = [
//     { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genre: 'Fiction' }, { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'Fiction' }, { id: 3, title: '1984', author: 'George Orwell', year: 1949, genre: 'Science Fiction' }, { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Fiction' }, { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, genre: 'Fantasy' },];

// const btn = document.querySelector('.btn');
// const input = document.querySelector('.input');
// const studentInfo = document.querySelector('.studentInfo');

// btn.addEventListener('click', () => {
//     const id = +input.value;

//     const selectedBook = books.find((book) => book.id === id);

//     if (selectedBook) {
//         studentInfo.innerHTML = `<h2>Book: ${selectedBook.title} <span>Year: ${selectedBook.year}</span></h2> `
//     } else {
//         studentInfo.innerHTML = ` <h2>Not found</h2>`
//     }
// });

// const list = document.querySelectorAll('.list li');

// list.forEach((item) => {
//     item.addEventListener('click', () => {
//         console.log(`Clicked ${item.textContent}`);
//     })
// });

// const person = {
//     name: 'Muhammadrasul',
//     age: 23
// }
// // console.log(person);
// // console.log(JSON.stringify(person));

// // const newPerson = JSON.stringify(person);

// // const returnObj = JSON.parse(newPerson);

// // console.log(returnObj);
// // localStorage.setItem('info', newPerson);

// // const firstName = localStorage.getItem('info');
// // localStorage.removeItem('info')
// // console.log(firstName);

// const item2 = document.querySelector('.item2');
// const item1 = item2.previousElementSibling;
// const item3 = item2.nextElementSibling;

// // console.log(item1);
// // console.log(item3);

// // const parentList = item1.parentNode;

// // console.log(parentList);


// const menu = item2.closest('body');
// console.log(menu);

const form = document.querySelector('.form'),
    name = document.querySelector('#name'),
    price = document.querySelector('#price'),
    itemId = document.querySelector('#itemId'),
    itemList = document.querySelector('.itemList');


form.addEventListener('submit', (e) => {


    e.preventDefault();

    if (itemId.value) {

        item = JSON.parse(localStorage.getItem(itemId.value));
        item.name = name.value;
        item.price = price.value

    } else {

        item = {
            name: name.value,
            price: price.value
        }
        itemId.value = Date.now();
    }

    localStorage.setItem(itemId.value, JSON.stringify(item));
    form.reset();

    render();
})


function render() {

    itemList.innerHTML = ''

    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const item = JSON.parse(localStorage.getItem(key))
            const li = document.createElement('li');
            li.innerHTML = `<span>Name: ${item.name}</span> <span>Price: $${item.price}</span>`;
            itemList.appendChild(li);

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            li.appendChild(editButton);

            editButton.addEventListener('click', () => {
                name.value = item.name;
                price.value = item.price;
                itemId.value = key;
            })
        }
    }
}

render()

