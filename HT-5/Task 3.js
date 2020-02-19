const a = Number(prompt("Введите число a: "));
const b = Number(prompt("Введите число b: "));

if (a % b === 0) {
    alert("Число a делится нацело на число b");
} else {
    alert("Число a НЕ делится нацело на число b");
}