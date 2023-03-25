// const arr1 = [1, 2, 4, 5]
// const arr2 = [6, 7, 8, 9, 10];
// const arr4 = [11, 12, true, false, 'Hello World']
// const arr3 = arr2.concat(arr1);
// const arr5 = arr3.concat(arr4)
// console.log(arr5);

// const numbers = [1, 2, 3, 5, 6];

// const selectedNumber = numbers.findIndex((num) => num > 3);

// console.log(selectedNumber);



// const animal = {
//     name: 'Kiki',
//     anim: {
//         typeAnimal: 'cat'
//     }
// }

// console.log(animal.anim?.typeAnimal);

// console.log('Hello world');




// function myName() {
//     var firstName = 'Muhammadrasul';
//     console.log(firstName);
// }

// console.log(firstName);
// myName();


// const status = true;

// if (status === true) {
//     var firstName = 'Muhammadrasul';
// }

// console.log(firstName);


// myName();

// function myName(params) {
//     console.log('Hello world');
// }


const cars = [
    {
        img: 'https://motor.ru/imgs/2022/03/03/10/5274800/6ddcf7e5e0a907893873e987c81ec9d1fedcc76e.jpg',
        car: 'BMW',
        status: 'new',
        quantity: 8
    },
    {
        img: 'https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/home/720x720_the-new-bmw-i7-xdriv.jpg.grp-transform/small/720x720_the-new-bmw-i7-xdriv.jpg',
        car: 'BMW',
        status: 'old',
        quantity: 12
    },
    {
        img: 'https://images.drive.com.au/driveau/image/upload/c_fill,h_675,w_1200/q_auto:eco/f_auto/v1/cms/uploads/ggutkfdonramc5akyims',
        car: 'Mercedes Benz',
        status: 'new',
        quantity: 2
    },
    {
        img: 'https://www.investing.com/academy/wp-content/uploads/2022/08/tesla-statistics.jpg',
        car: 'Tesla',
        status: 'new',
        quantity: 15
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
        car: 'Toyota',
        status: 'old',
        quantity: 19
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
        car: 'Toyota',
        status: 'old',
        quantity: 19
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png',
        car: 'Toyota',
        status: 'old',
        quantity: 19
    }
]

const renderedCars = cars.map((element) => {
    return ` 
    <div class="box">
    <img src="${element.img}" alt="">
    <h2>${element.car}</h2>
    <span>Status: ${element.status}</span>
    <p>Quantity: ${element.quantity}</p>
</div>
    `
});

const cards = document.querySelector('.cards');

cards.innerHTML = renderedCars.join('');




















