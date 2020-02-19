const a = Number(prompt("Введите число a: "));
const b = Number(prompt("Введите число b: "));
const c = Number(prompt("Введите число c: "));

if ((a <= 0) || (b <= 0) || (c <= 0)) {
    alert("Стороной треугольника может быть только положительное число");
} else if ((a < b + c) && (b < a + c) && (c < a + b)) {
    const p = ((a + b + c) / 2);
    const square = ((p * (p - a) * (p - b) * (p - c)) ** (1/2));
    alert("Площадь треугольника составляет " + square);
} else {
    alert("Треугольник с такими сторонами НЕ может существовать");
}