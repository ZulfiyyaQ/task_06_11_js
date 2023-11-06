const people = [
    { name: 'Samama', surname: 'Guliyeva', age: 21 },
    { name: 'Asiman', surname: 'Qasimzade', age: 32 },
    { name: 'Sebuhi', surname: 'Camalzade', age: 44 },
    { name: 'Zuzu', surname: 'Qurbanova', age: 20}
];

const table = document.getElementById("people");

for (let person of people) {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    const lastName = document.createElement('td');
    const age= document.createElement('td');

    name.textContent = person.name;
    lastName.textContent = person.surname
    age.textContent = person.age;

    row.appendChild(name);
    row.appendChild(lastName);
    row.appendChild(age);

    table.appendChild(row);
}