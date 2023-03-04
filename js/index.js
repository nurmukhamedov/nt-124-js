// function calcAverage(num1, num2, num3) {
//     return (num1 + num2 + num3) / 3
// }

// const team1 = calcAverage(70, 80, 120);
// const team2 = calcAverage(80, 70, 120);


// const winnerFunction = (result1, result2) => {
//     if (result1 > result2) {
//         return 'Team1 yutdi'
//     } else if (result1 === result2) {
//         return 'Durrang'
//     } else {
//         return 'Team2 yutdi'
//     }
// }

// console.log(winnerFunction(team1, team2));


// function myFun(a, b = 0) {
//     return a + b
// }

// console.log(myFun(4));

// const myText = document.querySelector('.text');

// // const newText = myText.textContent;
// // const newTextWithInnerText = myText.innerText;

// // console.log(newText);
// // console.log(newTextWithInnerText);

// myText.innerHTML = `<span>Hello World</span>`;

// const btn = document.querySelector('.btn');
// const myText = document.querySelector('.text');

// const body = document.querySelector('body');

// btn.addEventListener('click', function () {
//     body.classList.toggle('dark')
// })

// const openBtn = document.querySelector('.open');
// const closeBtn = document.querySelector('.close');
// const modal = document.querySelector('.modal');


// openBtn.addEventListener('click', () => {
//     modal.classList.add('modal-open')
// });

// closeBtn.addEventListener('click', () => {
//     modal.classList.remove('modal-open')
// }); 

function challengeFunction(num1, num2) {
    return ((num1 >= 10 && num1 <= 20) !== (num2 >= 10 && num2 <= 20));
}


console.log(challengeFunction(10, 10));

