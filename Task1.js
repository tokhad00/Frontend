function getSum() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
    return sum;
}

console.log("Сумма аргументов: " + getSum(1, 3, 5, 10));

/******************************/

const getRandomNumber = function(a, b) {
    return Math.round(Math.random() * (b - a) + a);
}

console.log("Случайное число: " + getRandomNumber(0, 100));
console.log("Случайное число: " + getRandomNumber(-20, 15));
console.log("Случайное число: " + getRandomNumber(30, 60));

/******************************/

const point1 = {
	x: Math.round((Math.random() * 50) - 10),
	y: Math.round((Math.random() * 50) - 10)
};

const point2 = {
	x: Math.round((Math.random() * 50) - 10),
	y: Math.round((Math.random() * 50) - 10)
};

function getDistance(point1, point2) {
    return Math.sqrt(((point2.x - point1.x) ** 2) + ((point2.y - point1.y) ** 2));
}

console.log(point1, point2);
console.log("Расстояние между точками: " + getDistance(point1, point2));

/******************************/

function generateRandomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgb = 'RGB(' +  red + ', ' +  green + ', ' +  blue + ')';
    return rgb;
}

console.log(generateRandomColor());

/******************************/

const n = Number(prompt("Введите число: "));

function isSimple(n) {
    if (n > 1) {
        let k = 0;
        for (let i = 2; i < n/2; i++) {
            if (n % i === 0) {
                k++;
                return false;
            }
        }

        if (k === 0) {
            return true;
        }
    } else {
        console.log("Отрицательные числа, 0 и 1 не являются простыми или составными");
    }
}

if (isSimple(n) && (n > 1)) {
	console.log("Число является простым");
} else if (n > 1) {
	console.log("Число является составным");
}