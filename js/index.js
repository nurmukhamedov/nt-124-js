// const box = document.querySelector('.box');

// fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then((data) => data.map((countries) => {
//     const img = document.createElement('img');
//     img.src = `${countries.flags.png}`
//     img.alt = `"${countries.flags.alt}"`

//     box.appendChild(img);

//     const name = document.createElement('h2');
//     name.textContent = countries.name.common;

//     box.appendChild(name);

//     const capital = document.createElement('h4');
//     capital.textContent = countries.capital

//     box.appendChild(capital);

//     const populationNum = document.createElement('h4');

//     const populationInString = String(countries.population);

//     if (populationInString.length === 6) {
//         populationNum.textContent = `${populationInString.slice(0, 3)}k`;
//         box.appendChild(populationNum)
//     } else {
//         populationNum.textContent = populationInString;
//         box.appendChild(populationNum);
//     }
// }));

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


const imagesUrl = 'https://image.tmdb.org/t/p/w500';
let url = 'https://api.themoviedb.org/3/discover/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6';



const search = document.querySelector('.search');

const movieList = document.querySelector('.box');

const fragment = document.createDocumentFragment();

async function fetchData() {

    if (!search.value) {
        url = 'https://api.themoviedb.org/3/discover/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6'
    } else {
        url = `https://api.themoviedb.org/3/search/movie?api_key=c1ba5d7054ad4225561ffacb783be3c6&query=${search.value}`
    }
    try {
        const response = await fetch(url);
        const data = await response.json();

        movieList.innerHTML = '';

        data.results.map((movie) => {
            console.log(movie);

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
    } catch (error) {
        console.log(error);
    }
}

fetchData();

const searchBtn = document.querySelector('.searchBtn');

searchBtn.addEventListener('click', () => {
    fetchData();
})

// 5 dan past bo'lsa backrground color qizil bo'lsin
// 5 dan baland va 8 dan past bo'lsa backrgoubd color sariq chiqsin.
// agar 8 dan baland bo'lsa background yashil bo'lsin.


// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'cf812e6b39msh77575a1c454d246p1b5032jsn9d81105df2bb',
//         'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
//     }
// };

// fetch('https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=-7', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));