const str = prompt("Введите строку: ");

const vowels = /[aeiouy]/gi;
const v = str.match(vowels) || [];

const strSplit = str.match(/\w+/gi);
console.log(strSplit);
let longestWord = '';

for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord.length) {
        longestWord = strSplit[i];
    }
}

alert("Количество гласных букв: " + v.length + "\nСамое длинное слово в строке: " + longestWord);