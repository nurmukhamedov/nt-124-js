// const age = 23;
// const firstName = 'John';
// let age1 = age;
// age1 = 20;

// console.log(age, age1);

// const person = {
//     age: 50,
//     fistName: 'Jack'
// }

// const person2 = person;
// person2.age = 40;
// console.log(person2);
// console.log(person);

// const arr = [1, 2, 3, 4, 5, 6];

// const newArray = arr;
// newArray.push(10);

// console.log(newArray);
// console.log(arr);

// const newObj = JSON.parse(JSON.stringify(person));
// newObj.age = 35;
// console.log(newObj);
// console.log(person);
// function studentInfo(num1, num2, num3) {
//     return `Ismim ${this.name} yoshim ${this.age} ${num1 + num2 + num3}`
// }

// const student = {
//     name: 'Jonny',
//     age: 21
// }

// const student2 = {
//     name: 'Tiffany',
//     age: 19
// }

// const myInfo = studentInfo.bind(student);

// console.log(myInfo());
// console.log(studentInfo.call(student2, 1, 2, 3));

// console.log(studentInfo.apply(student, [1, 2, 3]));


// const url = 'https://reqres.in/api/user'

// fetch(url).then((response) => response.json()).then((data) => console.log(data.data)).catch((error) => console.error(error));

// const person = {
//     firstName: 'Jack',
//     age: 35
// }

// fetch(url, {
//     method: 'POST',
//     headers: { 'Content-type': 'application/json' },
//     body: JSON.stringify(person)
// }).then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.error(error));

// const newObj = {
//     firstName: 'John',
//     age: 32
// }

// const objId = 5;

// fetch(`${url}/${objId}`, {
//     method: 'PUT',
//     headers: { 'Content-type': 'application/json' },
//     body: JSON.stringify(newObj)
// }).then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.error(error));

// fetch(`${url}/${objId}`, {
//     method: 'DELETE',
// }).then((response) => response.ok ? 'Object deleted' : 'Error').catch((error) => console.error(error));


// exam api call structure

const options = {
    method: 'GET',
    headers: {
        'x-api-key': 'wvkXdkebSntH2YW9nTprZea7jG7xTCAg8i2bTsjuFvw'
    },
};

fetch('https://api.newscatcherapi.com/v2/search?q=T', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));