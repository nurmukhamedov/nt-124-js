// const employees = {
//     Bob: 1700,
//     John: 6000,
//     Evelina: 1200,
//     Jack: 5600
// }

// const employees2 = {
//     Bob: 1700,
//     John: 6000,
//     Evelina: 1200,
//     Jack: 5600
// }

// const calcSumSalaries = (salaries) => {
//     let totalSalary = 0;
//     for (let salary in salaries) {
//         totalSalary += salaries[salary]
//     }

//     return totalSalary;
// }
// console.log(calcSumSalaries(employees));
// console.log(calcSumSalaries(employees2));


// const numbers = [-1, -3, -2, 1, 3, 5, 20];
// const missingNumsArray = [];

// console.log(...numbers);

// const findingMissingNumbers = function (nums) {
//     let min = Math.min(...nums);
//     let max = Math.max(...nums);

//     for (let i = min; i <= max; i++) {
//         if (!nums.includes(i)) {
//             missingNumsArray.push(i);
//         }
//     }
//     return missingNumsArray
// }

// console.log(findingMissingNumbers(numbers));


// const numbers = [1, 2, 3, 4, 5, 7];


// const checkNumber = (nums, checkingNum) => {

//     if (nums.includes(checkingNum)) {
//         return 'Bor'
//     } else {
//         return 'Yoq'
//     }
// }

// console.log(checkNumber(numbers, 8));


const colors = ['Red', 'Green', 'Black', 'Yellow', 'Orange', 'Purple'];

// const selectedColors = colors.slice(2, 3);

// console.log(selectedColors);

// const sentence = 'Hello world dears welcome to my you tube channels';
// const selectedText = sentence.slice(4, 14);
// console.log(selectedText);

// const selectedItems = function (items) {

//     const item = items.slice(0, 3);

//     return item;
// }
// console.log(selectedItems(colors));

// const fruits = ['Banana', 'Apple', 'Orange', 'Watermelon', 'Melon', 'Peach'];

// fruits.splice(2, 3, 'Hello World');

// console.log(fruits);

// const numbers = [1, 7, 2, 3, 4, 5, 6, 8, 7];

// console.log(numbers.indexOf(2, 1));

// const selectIndex = function (nums, target) {

//     return nums.indexOf(target)

// }

// console.log(selectIndex(numbers, 8));

// const numbers = [2, 4, 6, 8, 10, 6];

// const checkNums = function (numsArray) {
//     return numsArray % 2 === 0;
// }

// const result = numbers.some(num => num % 2 !== 0);

// console.log(result);

