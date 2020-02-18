const year = Number(prompt("Введите номер года: "));

if (year < 0) {
    alert("Номер года не может быть отрицательным");
} else if ((year % 4 !== 0) || ((year % 100 === 0) && (year % 400 !== 0)))  {
    alert("Год невисокосный");
} else {
    alert("Год високосный");
}