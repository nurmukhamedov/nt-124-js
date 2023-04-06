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

    if (countries.currencies) {
        const myCurrency = Object.keys(countries.currencies);
        const currencyText = document.createElement('p');
        currencyText.textContent = myCurrency[0];
        box.appendChild(currencyText)
    } else {
        const currencyText = document.createElement('p');
        currencyText.textContent = 'Pul birligi yoq';
        box.appendChild(currencyText)
    }

    console.log(countries.currencies);

}));

// const imagesUrl = 'https://image.tmdb.org/t/p/w500';
// let url = 'https://api.themoviedb.org/3/discover/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6';
// const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6&query=';



// function myFun(factor) {

//     return function (num) {
//         return factor * num
//     }
// }

// const multiplyNum = myFun(4);

// console.log(multiplyNum(4));

// function myFun() {
//     console.log('Hello world');
// }

// setTimeout(myFun, 2000);

// function sayHello(name, callback) {
//     console.log(`hello I am ${name}`);

//     callback();
// }

// function sayBye() {
//     console.log('Good bye');
// }

// sayHello('Muhammadrasul', sayBye);


// const imagesUrl = 'https://image.tmdb.org/t/p/w500';
// let url = 'https://api.themoviedb.org/3/discover/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6';



// const search = document.querySelector('.search');

// const movieList = document.querySelector('.box');

// const fragment = document.createDocumentFragment();

// const loader = document.querySelector('.loader');

// const loaderDiv = document.createElement('div');
// loaderDiv.classList.add('loader-div')
// loader.appendChild(loaderDiv)

let currentPage = 1;

async function fetchData() {
    if (!search.value) {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6&page=${currentPage}`
    } else {
        url = `https://api.themoviedb.org/3/search/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6&query=${search.value}`
    }
    try {
        const response = await fetch(url);
        const data = await response.json();

        movieList.innerHTML = '';
        console.log(data);
        data.results.map((movie) => {

            const movieBox = document.createElement('div');
            movieBox.classList.add('movie-box');

            const images = document.createElement('img');
            images.src = `${imagesUrl}${movie.backdrop_path}`;
            images.alt = movie.title;

            const title = document.createElement('h2');
            title.textContent = movie.title;

            const rating = document.createElement('span');
            rating.textContent = movie.vote_average;

            movieBox.appendChild(images);
            movieBox.appendChild(title);
            movieBox.appendChild(rating);
            fragment.appendChild(movieBox);

            movieList.appendChild(fragment);
        })
        const paginationWrapper = document.querySelector('.pagination_wrapper');

        paginationWrapper.innerHTML = '';

        if (data.total_pages > 1) {
            for (let i = 1; i <= 10; i++) {
                const button = document.createElement('button');
                button.textContent = i;
                if (currentPage === i) {
                    button.classList.add('active')
                }
                button.addEventListener('click', () => {
                    currentPage = i;
                    fetchData();
                })
                paginationWrapper.appendChild(button);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

fetchData();


// const searchBtn = document.querySelector('.searchBtn');

// searchBtn.addEventListener('click', () => {
//     fetchData();
// })

// function myFun() {
//     console.log('Hello world');
// }

// // const timeOut = setTimeout(myFun, 5000);
// // const btn = document.querySelector('.btn');

// // btn.addEventListener('click', () => {
// //     clearTimeout(timeOut)
// // });

// // const myInterval = setInterval(myFun, 1000);

// // setTimeout(() => {
// //     clearInterval(myInterval);
// // }, 5000);


// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// const [a, b, c] = arr;

// console.log(a, b);

// const person = {
//     firstName: { name: 'Muhammadrasul' },
//     age: 23,
//     status: 'teacher'
// }
// const person2 = {
//     johnName: 'John',
//     johnAge: 32
// }

// // const { firstName: myName, age } = person;
// // // const { name } = firstName;
// // // console.log(firstName);
// // // console.log(name);

// // console.log(myName);


// // const newObj = { ...person, ...person2 };

// // console.log(newObj);

// // const { firstName, ...newPerson } = person;
// // console.log(firstName);
// // console.log(newPerson);
// // const newArr = [...arr, ...arr2]

// // console.log(newArr);


// // function myFun(...myData) {
// //     console.log(myData);
// // }

// // myFun(1, 2, 3, 4, 5, 6, 7, 8);


// const newObjArr = Object.entries(person);

// console.log(newObjArr);

// const onlyKeys = Object.keys(person);
// const onlyValues = Object.values(person);
// console.log(onlyValues);
// console.log(onlyKeys);
