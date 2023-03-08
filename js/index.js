// "use strict";

// // console.log(firstName);
// console.log(myName);
// // const firstName = 'Muhammadrasul';

// const myFun = function () {
//     return 'Hello World'
// }
// const a = 5;

// console.log(a);

// x = 5;
// console.log(x);

// function myFun(params) {
//     'use strict';

//     const x = 2;

//     return x;
// }
// myFun();

// y = 2;

// console.log(y);

// const age = -23;

// console.log(isNaN(age));

// const pattern = /mmu/;
// const pattern = new RegExp("mm");
// const text = 'Muhammadrasul';

// console.log(pattern.test(text));
// console.log(text.match(pattern));

// const pattern1 = /uz|O'z|Uz|Oz/;
// const string1 = 'Uzbekistan';
// const match1 = pattern1.test(string1);
// console.log(match1);

// const pattern2 = /[^Tashkent]+/;
// const string2 = 'Samarkand';
// const match2 = pattern2.test(string2)
// console.log(match2);

// const pattern3 = /^J.*e$/;
// const string3 = 'Jina hello heye';
// const match3 = pattern3.test(string3);
// console.log(match3);
// const pattern4 = /^\d+$/;
// const string4 = '1234';
// const match4 = pattern4.test(string4);
// console.log(match4);

// const pattern5 = /\D+/;
// const string5 = '12a34';
// const match5 = pattern5.test(string5);

// console.log(match5);

// const pattern = /^\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$/;
// const myNumber = '998-91-123-45-67';

// console.log(pattern.test(myNumber));


const title = document.querySelector('.title');

// title.style.backgroundColor = 'blue';


// const helloText = ' Hello     World ';
// console.log(helloText);
// console.log(helloText.length);
// console.log(helloText.trim().toUpperCase());

const form = document.querySelector('.form'),
    formName = document.querySelector('.name'),
    warning = document.querySelectorAll('.warning'),
    relation = document.querySelector('.relationship'),
    age = document.querySelector('.age'),
    btn = document.querySelector('.btn'),
    boxInfo = document.querySelectorAll('.box__info')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!formName.value) {
        warning[0].textContent = 'Iltimos name kiriting';
        formName.classList.add('danger');
    } else {
        warning[0].textContent = '';
        formName.classList.remove('danger');
    }

    if (!relation.value) {
        warning[1].textContent = 'Iltimos relation kiriting';
        relation.classList.add('danger');
    } else {
        warning[1].textContent = '';
        relation.classList.remove('danger');
    }
    if (!age.value) {
        warning[2].textContent = 'Iltimos age kiriting';
        age.classList.add('danger');
    } else {
        warning[2].textContent = '';
        age.classList.remove('danger');
    }

    boxInfo[0].innerText = `Name: ${formName.value}`;
    boxInfo[1].innerText = `Relation: ${relation.value}`;
    boxInfo[2].innerText = `Age: ${age.value}`;


    formName.value = '';
    relation.value = '';
    age.value = '';
})

