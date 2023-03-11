// const years = [1998, 2005, 1990, 2000, 2015];
// const userAges = [];


const calcYears = function (year) {
    return 2023 - year
}

// for (let i = 0; i < years.length; i++) {
//     const ages = calcYears(years[i]);

//     userAges.push(ages)
// }

// console.log(userAges);

// const years = [1998, 2005, 1990, 2000, 2015, 1997];

// for (let i = years.length - 1; i >= 0; i--) {
//     console.log(years[i]);
// }

// const reversedArray = years.reverse();

// console.log(reversedArray);
// const box = document.querySelector('.box');
// const body = document.querySelector('body');


// for (let element of years) {
//     const ages = calcYears(element);

//     const h2 = document.createElement('h2');

//     h2.textContent = ages;

//     box.appendChild(h2);
// }

// const myBlock = document.createElement('div');
// myBlock.classList.add('block');

// box.appendChild(myBlock);

// const names = ['John', 'Bob', 'Tony', 5];

// const allNames = names.join(' ');

// console.log(allNames);

// const myName = 'Muhammadrasul Nurmukhamedov';

// const arrayName = myName.split('');

// console.log(arrayName);

// const firstName = 'Hello';

// const reversedName = firstName.split('').reverse().join(' ');

// const text = document.querySelector('.text'),
//     btn = document.querySelector('.btn'),
//     block = document.querySelector('.block');

// btn.addEventListener('click', () => {
//     const reversedName = text.value.split('').reverse().join(' ');

//     block.innerHTML += `<p> ${reversedName} </p>`;

//     text.value = '';
// })

// const input = document.createElement('input');
// const box = document.querySelector('.box');
// input.type = 'text';
// input.placeholder = 'Name kiriting';

// box.appendChild(input);

// const person = {
//     firstName: 'Muhammadrasul',
//     lastName: 'Nurmukhamedov',
//     age: 23,
//     status: 'teacher'
// }
// console.log(person.age);

const datas = [
    {
        name: 'Alice',
        age: 28,
        hobbies: ['reading', 'swimming', 'yoga']
    },
    {
        name: 'Bob',
        age: 35,
        hobbies: ['hiking', 'painting', 'baking']
    }
]
const block = document.querySelector('.block');

for (element of datas) {

    const h2 = document.createElement('h2');
    h2.textContent = `${element.name} ${element.age} ${element.hobbies[0]}`;

    block.appendChild(h2);
}




