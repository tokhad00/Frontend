const a = Number(prompt("Введите число a: "));
const b = Number(prompt("Введите число b: "));
const c = Number(prompt("Введите число c: "));
const d = Number(prompt("Введите число d: "));

const e = a > b ? a : b;
const f = c > d ? c : d;
const max = e > f ? e : f;
alert("Максимальное число: " + max);
alert("Среднее гармоническое: " + (4 / (1/a + 1/b + 1/c + 1/d)));