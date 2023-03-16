// // const distance = document.querySelector('.distance');
// // const btn = document.querySelector('.btn');
// // const textBox = document.querySelectorAll('.box h3');

// // const calcDistance = function (userDistance) {
// //     const walkingSpeed = 3.6;
// //     const bikingSpeed = 20.1;
// //     const carSpeed = 70;
// //     const planeSpeed = 800;

// //     const walkingTime = (userDistance / walkingSpeed).toFixed(2);
// //     const bikingTime = (userDistance / bikingSpeed).toFixed(2);
// //     const carTime = (userDistance / carSpeed).toFixed(2);
// //     const planeTime = (userDistance / planeSpeed).toFixed(2);

// //     return {
// //         walking: walkingTime,
// //         biking: bikingTime,
// //         car: carTime,
// //         plane: planeTime
// //     }
// // }

// // btn.addEventListener('click', () => {
// //     const travel = calcDistance(distance.value)

// //     textBox[0].textContent = `Walking: ${travel.walking} soat`;
// //     textBox[1].textContent = `Biking: ${travel.biking} soat`;
// //     textBox[2].textContent = `Car: ${travel.car} soat`;
// //     textBox[3].textContent = `Plane: ${travel.plane} soat`;

// //     distance.value = '';
// // })

// // const x = 10;
// // const y = 15;
// // const z = 5;

// // console.log(Math.max(x, y, z));

// // const numbers = [5, 28, 16, 10, 4, 45, 104, 12, 3, 7, 200];
// // let min = numbers[0];
// // let max = numbers[0];

// // for (const num of numbers) {
// //     min = Math.min(min, num);
// //     max = Math.max(max, num);
// // }
// // const range = max - min;
// // console.log(min, max, range);

// const person = {
//     firstName: 'Muhammadrasul',
//     age: 23,
//     status: 'teacher',
//     myInfo: function () {
//         return `Hello my name is ${this.firstName} my age is ${this.age}, I am ${this.status}`;
//     }
// }

// // const person2 = {
// //     firstName: "Muhammad",
// //     age: 12,
// //     status: 'oquvchi',
// //     greeting: person.myInfo()
// // }
// // console.log(person.myInfo());

// // console.log(person2.greeting());

// // for (const prop in person) {
// //     console.log(person[prop]);
// // }


// const name = document.querySelector('.name');
// const number = document.querySelector('.number');
// const relation = document.querySelector('.relation');
// const form = document.querySelector('.form');
// const box = document.querySelector('.box');
// const deleteBtn = document.querySelector('.deleteBtn');
// const body = document.querySelector('body');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const contact = document.createElement('div');
//     contact.classList.add('contact')

//     const spanName = document.createElement('span');
//     spanName.textContent = name.value;
//     contact.appendChild(spanName);

//     const spanRelation = document.createElement('span');
//     spanRelation.textContent = relation.value;
//     contact.appendChild(spanRelation);

//     const spanNumber = document.createElement('span');
//     spanNumber.textContent = number.value;
//     contact.appendChild(spanNumber);

//     const deleteBtn = document.createElement('button');
//     deleteBtn.classList.add('deleteBtn');
//     deleteBtn.textContent = 'Delete';
//     contact.appendChild(deleteBtn);

//     box.appendChild(contact);

//     deleteBtn.addEventListener('click', () => {
//         box.removeChild(contact)
//     });

//     form.reset();
// });

// const numbers = [-1, 2, 3, 4, -5, -6, -8, 9, 9.25, -8.5];
// const positiveNumbers = [];

// for (let nums of numbers) {
//     if (nums < 0) {
//         nums = nums * -1;
//     }
//     positiveNumbers.push(Math.round(nums));
// }

// console.log(positiveNumbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];


//     total += element;
// }
// console.log(total);


// let index = 0;

// while (index < 50) {
//     console.log(index);
//     index++;
// }


// let dice = Math.round(Math.random() * 10 + 1);


// while (dice !== 9) {
//     dice = Math.round(Math.random() * 10 + 1);
//     if (dice === 9) {
//         console.log(`Siz yutdingiz ${dice} chiqdi`);
//     } else {
//         console.log(`Siz yutolmadingiz ${dice} chiqdi`);
//     }
// }

// const box = document.querySelector('.box');

// const image = document.createElement('img');
// image.classList.add('image');
// image.src = './images/car.jpg';
// image.alt = 'Bmw'
// box.appendChild(image);
const numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];
// const numbers2 = [11, 12, 13];

// const calcOddNumbers = function (nums) {
//     let total = 0;
//     for (number of nums) {
//         if (number % 2 !== 0) {
//             total += number
//         }
//     }
//     return total
// }



// console.log(calcOddNumbers(numbers));



// console.log(calcOddNumbers(numbers2));






// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// for (const number of numbers) {
//     console.log(number);
// }


const box = document.querySelector('.box');


const btn = document.querySelector('.btn');

const addClass = function () {
    box.classList.add('extra-box')
}

btn.addEventListener('click', addClass);





