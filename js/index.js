// const numbers = [1, 2, 3, 5, 6];

// const checkNumbers = function (nums, target) {
//     const checkNum = nums.indexOf(target);

//     if (checkNum === -1) {
//         return []
//     } else {
//         return [checkNum]
//     }
// }

// console.log(checkNumbers(numbers, 7));

// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];

// const checkAge = function (person, age) {
//     return person.age >= age;
// }

// const checkedAge = people.every((element) => checkAge(element, 25));

// if (checkedAge) {
//     console.log('Hammasi tekshirilgan yoshdan katta');
// } else {
//     console.log('Hammasi ham tekshirilgan yoshdan katta emas');
// }

// const calcAge = function (allPeople, age) {
//     const checkedAge = allPeople.every((person) => person.age >= age);

//     if (checkedAge) {
//         return 'Hammasi tekshirilgan yoshdan katta'
//     } else {
//         return 'Hammasi ham tekshirilgan yoshdan katta emas'
//     }
// }
// console.log(calcAge(people, 25));

// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }

// const btn = document.querySelector('.btn');

// const sayClick = function () {
//     console.log('Clicked');
// }

// btn.addEventListener('click', sayClick);

// const numbers = [1, 2, 3, 5, 6, false];

// // numbers.forEach((num, index, array) => {
// //     array[index] = num * 2
// // });

// // console.log(numbers);

// const newNumbers = numbers.map((num) => {
//     return num * 2;
// })
// console.log(numbers);
// console.log(newNumbers);


// const ages = [15, 5, 12, 7, 99, 45, 25];

// ages.sort((num1, num2) => num2 - num1);

// console.log(ages);

// const names = ['George', 'Alice', 'David', 'Jack', 'Bob'].sort();



// // console.log(names);

// names.sort((name1, name2) => name2.localeCompare(name1));

// console.log(names);


// const numbers = [2, 4, 6, 8, 10, 11, 13, 15, 4, 5];

// const newNumbers = numbers.filter((num) => {
//     return num > 6 && num < 9
// });
// console.log(newNumbers);

// const totalNumbers = numbers.reduce((acc, element) => {
//     return acc + element
// });
// console.log(totalNumbers);



// const cars = [
//     {
//         img: 'https://motor.ru/imgs/2022/03/03/10/5274800/6ddcf7e5e0a907893873e987c81ec9d1fedcc76e.jpg',
//         car: 'BMW',
//         status: 'new',
//         quantity: 8
//     },
//     {
//         img: 'https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/home/720x720_the-new-bmw-i7-xdriv.jpg.grp-transform/small/720x720_the-new-bmw-i7-xdriv.jpg',
//         car: 'BMW',
//         status: 'old',
//         quantity: 12
//     },
//     {
//         img: 'https://images.drive.com.au/driveau/image/upload/c_fill,h_675,w_1200/q_auto:eco/f_auto/v1/cms/uploads/ggutkfdonramc5akyims',
//         car: 'Mercedes Benz',
//         status: 'new',
//         quantity: 2
//     },
//     {
//         img: 'https://www.investing.com/academy/wp-content/uploads/2022/08/tesla-statistics.jpg',
//         car: 'Tesla',
//         status: 'new',
//         quantity: 15
//     },
//     {
//         img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
//         car: 'Toyota',
//         status: 'old',
//         quantity: 19
//     },
//     {
//         img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
//         car: 'Toyota',
//         status: 'old',
//         quantity: 19
//     },
//     {
//         img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
//         car: 'Toyota',
//         status: 'old',
//         quantity: 19
//     }
// ]

// const row = document.querySelector('.row');


const renderedCars = cars.map((element) => {
    return `
    <div class="col-lg-4">
                <div class="card" style="width: 18rem;">
                    <img src="${element.img}">
                    <div class="card-body">
                        <h5 class="card-title">${element.car}</h5>
                        <p>Status: ${element.status}</p>
                        <span>Quantity: ${element.quantity}</span>
                    </div>
                </div>
    </div>
    `
});
row.innerHTML = renderedCars.join('');


const animals = [
    {
        age: 2,
        type: 'dog'
    },
    {
        age: 3,
        type: 'cat'
    },
    {
        age: 8,
        type: 'dog'
    },
    {
        age: 8,
        type: 'horse'
    },
    {
        age: 8,
        type: 'dog'
    },
    {
        age: 8,
        type: 'elephant'
    }
]
const newAnimals = animals.filter((animal) => {
    if (animal.type === 'dog') {
        return animal
    }
});

console.log(newAnimals);