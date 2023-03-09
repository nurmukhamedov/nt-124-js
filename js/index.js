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


// const title = document.querySelector('.title');

// // title.style.backgroundColor = 'blue';


// // const helloText = ' Hello     World ';
// // console.log(helloText);
// // console.log(helloText.length);
// // console.log(helloText.trim().toUpperCase());

// const form = document.querySelector('.form'),
//     formName = document.querySelector('.name'),
//     warning = document.querySelectorAll('.warning'),
//     relation = document.querySelector('.relationship'),
//     age = document.querySelector('.age'),
//     btn = document.querySelector('.btn'),
//     boxInfo = document.querySelectorAll('.box__info'),
//     number = document.querySelector('.number'),
//     setPassword = document.querySelector('.set_password'),
//     confirmPassword = document.querySelector('.confirm_password');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (!formName.value) {
//         warning[0].textContent = 'Iltimos name kiriting';
//         formName.classList.add('danger');
//     } else {
//         warning[0].textContent = '';
//         formName.classList.remove('danger');
//     }

//     if (!relation.value) {
//         warning[1].textContent = 'Iltimos relation kiriting';
//         relation.classList.add('danger');
//     } else {
//         warning[1].textContent = '';
//         relation.classList.remove('danger');
//     }
//     if (!age.value) {
//         warning[2].textContent = 'Iltimos age kiriting';
//         age.classList.add('danger');
//     } else {
//         warning[2].textContent = '';
//         age.classList.remove('danger');
//     }
//     if (!number.value) {
//         warning[3].textContent = 'Iltimos number kiriting';
//         number.classList.add('danger');
//     }
//     else if (!validateNumber(number.value)) {
//         warning[3].textContent = 'Raqam mos kelmadi';
//         number.classList.add('danger');
//     } else {
//         warning[3].textContent = '';
//         number.classList.remove('danger');
//     }
//     if (confirmPassword.value !== setPassword.value) {
//         warning[4].textContent = 'Parol tasdiqlanmadi';
//         confirmPassword.classList.add('danger');
//     } else {
//         warning[4].textContent = '';
//         confirmPassword.classList.remove('danger');
//     }
//     boxInfo[0].innerText = `Name: ${formName.value}`;
//     boxInfo[1].innerText = `Relation: ${relation.value}`;
//     boxInfo[2].innerText = `Age: ${age.value}`;


//     formName.value = '';
//     relation.value = '';
//     age.value = '';
// });

// function validateNumber(phoneNumber) {
//     const pattern = / ^\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$/;
//     return pattern.test(phoneNumber)
// }

// const btnCurrency = document.querySelector('.btnCurrency'),
//     money = document.querySelector('.money'),
//     selectedMoney = document.querySelector('.selectedMoney'),
//     euro = document.querySelector('.euro'),
//     dollar = document.querySelector('.dollar'),
//     block = document.querySelector('.block');


// btnCurrency.addEventListener('click', (e) => {
//     e.preventDefault();

//     if (selectedMoney.value === dollar.value) {
//         return block.innerHTML = `<h4>$${(money.value / 11500).toFixed(2)}</h4>`
//     } else if (selectedMoney.value === euro.value) {
//         return block.innerHTML = `<h4>Euro ${(money.value / 12000).toFixed(2)}</h4>`
//     } else {
//         return block.innerHTML = `<h4>Xato</h4>`
//     }
// })    