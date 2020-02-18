const bytes = Number(prompt("Введите число байт: "));

if ((bytes >= 1) && (bytes <= 2 ** 41)) {
    const kb = bytes / 2 ** 10;
    const mb = bytes / 2 ** 20;
    const gb = bytes / 2 ** 30;
    if ((gb >= 1) && (gb <= 1024)) {
        alert(bytes + " байт = " + kb + " КБ = " + mb + " МБ = " + gb + " ГБ");
    } else {
        alert(bytes + " байт = " + kb + " КБ = " + mb + " МБ");
    }
} else {
    alert("Число должно быть в диапазоне от 1 до 2 ** 41");
}