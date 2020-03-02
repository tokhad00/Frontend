const names = ['Андрей', 'Алексей', 'Михаил', 'Олег', 'Даниил', 'Эмиль', 'Томас', 'Марк', 'Владислав', 'Арсений', 'Егор'];
const persons = [];

function sortPersons(persons, key) {
    persons.sort(function(a, b) {
        return a[key] - b[key];
    });
}

const N = Number(prompt("Введите количество объектов: "));
const key = prompt("Введите название ключа для сортировки (age, height или salary): ");

if ((key === 'age') || (key === 'height') || (key === 'salary')) {
    for (let i = 0; i < N; i++) {
        const nameIndex = Math.floor(Math.random() * names.length);
    
        persons.push({
            name: names[nameIndex],
            age: Math.round((Math.random() * 95) + 5),
            height: Math.round((Math.random() * 60) + 150),
            salary: Math.round(Math.random() * 500)
        });
    }
    
    const oldArray = persons.slice();
    sortPersons(persons, key);
    
    console.table(oldArray);
    console.table(persons);
} else {
    alert("В объектах отсутствует указанный ключ. Сортировка невозможна");
}