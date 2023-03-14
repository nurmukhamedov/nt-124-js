// const distance = document.querySelector('.distance');
// const btn = document.querySelector('.btn');
// const textBox = document.querySelectorAll('.box h3');

// const calcDistance = function (userDistance) {
//     const walkingSpeed = 3.6;
//     const bikingSpeed = 20.1;
//     const carSpeed = 70;
//     const planeSpeed = 800;

//     const walkingTime = (userDistance / walkingSpeed).toFixed(2);
//     const bikingTime = (userDistance / bikingSpeed).toFixed(2);
//     const carTime = (userDistance / carSpeed).toFixed(2);
//     const planeTime = (userDistance / planeSpeed).toFixed(2);

//     return {
//         walking: walkingTime,
//         biking: bikingTime,
//         car: carTime,
//         plane: planeTime
//     }
// }

// btn.addEventListener('click', () => {
//     const travel = calcDistance(distance.value)

//     textBox[0].textContent = `Walking: ${travel.walking} soat`;
//     textBox[1].textContent = `Biking: ${travel.biking} soat`;
//     textBox[2].textContent = `Car: ${travel.car} soat`;
//     textBox[3].textContent = `Plane: ${travel.plane} soat`;

//     distance.value = '';
// })

// const x = 10;
// const y = 15;
// const z = 5;

// console.log(Math.max(x, y, z));

// const numbers = [5, 28, 16, 10, 4, 45, 104, 12, 3, 7, 200];
// let min = numbers[0];
// let max = numbers[0];

// for (const num of numbers) {
//     min = Math.min(min, num);
//     max = Math.max(max, num);
// }
// const range = max - min;
// console.log(min, max, range);

const person = {
    firstName: 'Muhammadrasul',
    age: 23,
    status: 'teacher',
    myInfo: function () {
        return `Hello my name is ${this.firstName} my age is ${this.age}, I am ${this.status}`;
    }
}

// const person2 = {
//     firstName: "Muhammad",
//     age: 12,
//     status: 'oquvchi',
//     greeting: person.myInfo()
// }
// console.log(person.myInfo());

// console.log(person2.greeting());

// for (const prop in person) {
//     console.log(person[prop]);
// }


const name = document.querySelector('.name');
const number = document.querySelector('.number');
const relation = document.querySelector('.relation');
const form = document.querySelector('.form');
const box = document.querySelector('.box');
const deleteBtn = document.querySelector('.deleteBtn');
const body = document.querySelector('body');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const contact = document.createElement('div');
    contact.classList.add('contact')

    const spanName = document.createElement('span');
    spanName.textContent = name.value;
    contact.appendChild(spanName);

    const spanRelation = document.createElement('span');
    spanRelation.textContent = relation.value;
    contact.appendChild(spanRelation);

    const spanNumber = document.createElement('span');
    spanNumber.textContent = number.value;
    contact.appendChild(spanNumber);
    box.appendChild(contact);

    form.reset();
})


deleteBtn.addEventListener('click', () => {
    body.removeChild(box);
})



