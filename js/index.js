// const studentsArray = ['Muhammad', true, false, 5, 6, 'Muhammadrasul', true];
// const element = studentsArray[studentsArray.length - 2];
// console.log(element);

// const fruits = new Array('Apple', 'Banana', 'Orange');

// console.log(fruits[1]);

// const numbers = [1, 2, 3, 4, 5, 6];

// const checkArray = numbers.includes(4);

// console.log(checkArray);

// numbers.push(52, 47, 15, 108);
// numbers.pop();
// numbers.unshift(100);
// numbers.unshift('Hello');
// numbers.shift()
// numbers.shift()
// numbers.shift()
// numbers.shift()
// numbers.shift()

// console.log(numbers);
// const numbers = [1, 2, 8]
// const myArray2 = ['Orange', 'Apple', 'Banana', [1, 2, 8, 5]];

// const nestedArray = myArray2[3];
// console.log(nestedArray[2]);

const calcTip = function (bill) {
    if (bill > 50 && bill < 300) {
        return bill * 0.15
    } else {
        return bill * 0.3
    }
}
const myArray = [125, 555, 44, 650, 85, 25, 126];

// console.log(calcTip(myArray[0]));
// console.log(calcTip(myArray[1]));
// console.log(calcTip(myArray[2]));

// for (let i = 20; i <= 100; i++) {
//     console.log(i);
// }



// for (let i = 0; i < myArray.length; i++) {
//     console.log(calcTip(myArray[i]));
// }



const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const newNumbers = [];

const calcNumber = function (num) {
    return num * 2
}

for (let index = 0; index < numbers.length; index++) {
    const element = calcNumber(numbers[index])
    newNumbers.push(element);
}
console.log(newNumbers);


