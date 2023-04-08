const url = 'https://reqres.in/api/users'


const tBody = document.getElementById('tbody');
const form = document.getElementById('add-user-form');

fetch(url).then((response) => response.json()).then((data) => {
    data.data.map((user) => {
        const { id, first_name, last_name, email } = user;
        const row = document.createElement('tr');

        row.innerHTML = `
          <td>${id}</td>
          <td>${first_name}</td>
          <td>${last_name}</td>
          <td>${email}</td>
          <td><button class="edit-button" data-id="${id}" data-name="${first_name}" data-lName="${last_name}" data-email="${email}">Edit</button></td>
          <td><button data-id="${id}" class="delete-button">Delete</button></td>
        `
        tBody.appendChild(row);



    })
}).catch((error) => console.error(error));





tBody.addEventListener('click', (e) => {
    const id = e.target.dataset.id;


    if (e.target.classList.contains('edit-button')) {

        const id = e.target.dataset.id;
        const name = e.target.dataset.name;
        const lName = e.target.dataset.lname;
        const email = e.target.dataset.email;

        document.getElementById('update-id').value = id;
        document.getElementById('name').value = name;
        document.getElementById('lName').value = lName;
        document.getElementById('email').value = email;
        document.querySelector('#save-user-button').textContent = 'Edit List';

    } else if (e.target.classList.contains('delete-button')) {

        deleteUser(id).then(() => {

            const tableRow = e.target.closest('tr');
            tableRow.remove();

        }).catch((error) => console.error(error))
    }
})



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const lName = document.getElementById('lName').value;
    const email = document.getElementById('email').value;
    const id = document.getElementById('update-id').value;



    if (id) {
        updateUser(id, name, lName, email);
        form.reset();

    } else {

        const formData = {
            name: name,
            lName: lName,
            email: email
        }

        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((data) => {
            const row = document.createElement('tr');

            row.innerHTML = `
          <td>${data.id}</td>
          <td>${name}</td>
          <td>${lName}</td>
          <td>${email}</td>
          <td><button class="edit-button" data-id="${data.id}" data-name="${name}" data-lName="${lName}" data-email="${email}">Edit</button></td>
          <td><button data-id="${id}" class="delete-button">Delete</button></td>
        `
            tBody.appendChild(row);
            form.reset();

        }).catch((error) => console.error(error));

    }

});








async function updateUser(id, name, lName, email) {

    const formData = {
        name: name,
        lname: lName,
        email: email
    }

    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        const tableRows = document.querySelectorAll('#tbody tr');

        for (const row of tableRows) {
            if (row.children[0].textContent === id.toString()) {
                row.children[1].textContent = name;
                row.children[2].textContent = lName;
                row.children[3].textContent = email;
            }
        }
        document.querySelector('#save-user-button').textContent = 'Save';
        return data;

    } catch (error) {

    }

}


async function deleteUser(id) {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            return response.text();
        }

    } catch (error) {
        console.error(error);
    }

}

import myFun from './allFunctions.js';
import { myUrl } from './allFunctions.js';

console.log(myUrl);


