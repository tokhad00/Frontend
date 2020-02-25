const names = ['Андрей', 'Алексей', 'Михаил', 'Олег', 'Даниил', 'Эмиль', 'Томас', 'Марк', 'Владислав', 'Арсений', 'Егор'];
const dateFrom = new Date('1980-01-01').getTime();
const dateTill = new Date('1995-12-31').getTime();

const N = Number(prompt("Введите количество человек: "));

const persons = [];

for (let i = 0; i < N; i++) {
    const nameIndex = Math.floor(Math.random() * names.length);
    const birthDate = Math.round(Math.random() * (dateTill - dateFrom) + dateFrom);

    persons.push({
        name: names[nameIndex],
        birthday: new Date(birthDate),
        salary: Math.round(Math.random() * 500),
    });
}

console.table(persons);

const today = new Date();
let age = 0;
let totalAge = 0;
let maxSalary = 0;
let nameMaxSalary = '';

for (let j = 0; j < persons.length; j++) {
    if (persons[j].salary > maxSalary) {
        maxSalary = persons[j].salary;
        nameMaxSalary = persons[j].name;
    }
    age = Math.floor((today - persons[j].birthday) / (1000 * 3600 * 24 * 365));
    totalAge += age;
}

alert("Средний возраст: " + (totalAge / persons.length) + "\nЧеловек с самой высокой зарплатой: " + nameMaxSalary);