const numberExp = /^((?!.*911.*\d{4})((\+?1[- ]?)?(?![- ]?555.*)\( ?[2-9][0-9]{2} ?\) ?|(\+?1[- ])?[2-9][0-9]{2}[- ]?)(?!555.?01..)([2-9][0-9]{2})[- ]?([0-9]{4})$)/g;

const correctNumbers = [];
const N = prompt("Введите количество блоков текста: ");

for (let i = 0; i < N; i++) {
    let str = prompt("Введите строку: ");
    correctNumbers[i] = str.match(numberExp);
}

console.table(correctNumbers);