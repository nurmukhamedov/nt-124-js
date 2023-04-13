// const person = {
//     name: 'Muhammadrasul',
//     age: 23,
//     info: function () {
//         console.log(`My name is ${this.name} and my age ${this.age}`);
//     }
// }
// const person2 = {
//     name: 'John',
//     age: 32,
//     info: person.info
// }

// person2.info();


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         return `Hello my name is ${this.name} and my age is ${this.age}`
//     }
// }

// const teacher = new Person('Muhammadrasul', 23);
// const student = new Person('John', 35);
// console.log(teacher.sayHello());
// console.log(student);

// function People(name, age) {

//     this.name = name;
//     this.age = age;

//     this.info = function () {
//         return `Hello my name is ${this.name} and my age is ${this.age}`
//     }
// }

// const student2 = new People('Jack', 34)
// console.log(student2);



// class Person {
//     constructor(name, age) {
//         let _name = name;
//         let _age = age;

//         this.getName = function () {
//             return _name;
//         }
//         this.getAge = function () {
//             return _age;
//         }
//     }
// }

// const student3 = new Person('John', 24)

// console.log(student3.getAge());


// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     speak() {
//         console.log(`${this.name} shovqinli`);
//     }
// }

// class Cat extends Animal {
//     constructor(name, age) {
//         super(name, age)
//     }

//     speak() {
//         console.log(`${this.name} meow`);
//     }
// }

// const newAnimal = new Animal('Reks', 3);
// console.log(newAnimal);
// newAnimal.speak();

// const cat = new Cat('Kiki', 1);

// console.log(cat);

// cat.speak();  

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});