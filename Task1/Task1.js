let originalText = document.getElementById('original-text');
let encryptedText = document.getElementById('encrypted-text');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
let cryptedText;
let pos;
  
const otherSymbols = [' ',',','.',':',';','!','?','-','_','=','+','(',')','[',']','@','`',"'",'"','<','>','|','/','%','$','^','&','*','~'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const rusAlphabetUpper = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
const rusAlphabetLower = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
const engAlphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const engAlphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let rusAlphabetUpperEncrypt = Array(33);
let rusAlphabetLowerEncrypt = Array(33);
let engAlphabetUpperEncrypt = Array(26);
let engAlphabetLowerEncrypt = Array(26);
let numbersEncrypt = Array(10);

function shiftAlphabets() {
  let encryptionStep = Number(document.getElementById('encrypt-step').value);
  numbersEncrypt = encryptByCezar(encryptionStep, numbers);
  rusAlphabetUpperEncrypt = encryptByCezar(encryptionStep, rusAlphabetUpper);
  rusAlphabetLowerEncrypt = encryptByCezar(encryptionStep, rusAlphabetLower);
  engAlphabetUpperEncrypt = encryptByCezar(encryptionStep, engAlphabetUpper);
  engAlphabetLowerEncrypt = encryptByCezar(encryptionStep, engAlphabetLower);
}
  
function encryptByCezar(step, arr) {
  let copyOfAlphabet = arr.slice();
  let i = 0;
    
  while ((i + step) < (copyOfAlphabet.length)) {
    let buff = copyOfAlphabet[i];
    copyOfAlphabet[i] = copyOfAlphabet[i + step];
    copyOfAlphabet[i + step] = buff;
    i++;     
  }
  return copyOfAlphabet;
}
  
function isContain(symb, arr) {
  let letter = symb;
  pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (letter === arr[i]) {
      pos = i;
      return true;
    }
  }
}
  
function encrypt(text) {
  let result = '';

  for (let i = 0; i <= text.length; i++) {
    let symbol = text[i];

    if (isContain(symbol, otherSymbols)) {
      result += symbol;
    }
    if (isContain(symbol, numbers)) {
      symbol = numbersEncrypt[pos];
      result += symbol;
    }
    if (isContain(symbol, rusAlphabetUpper)) {
      symbol = rusAlphabetUpperEncrypt[pos];
      result += symbol;
    }
    if ((isContain(symbol, rusAlphabetLower))) {
      symbol = rusAlphabetLowerEncrypt[pos];
      result += symbol;
    }
    if (isContain(symbol, engAlphabetUpper)) {
      symbol = engAlphabetUpperEncrypt[pos];
      result += symbol;
    }
    if ((isContain(symbol, engAlphabetLower))) {
      symbol = engAlphabetLowerEncrypt[pos];
      result += symbol;
    }
  }
  return result;
}
  
function decrypt(text) {
  let result = '';

  for (let i = 0; i <= text.length; i++) {
    let symbol = text[i];

    if (isContain(symbol, otherSymbols)) {
      result += symbol;
    }
    if (isContain(symbol, numbersEncrypt)) {
      symbol = numbers[pos];
      result += symbol;
    }
    if (isContain(symbol, rusAlphabetUpperEncrypt)) {
      symbol = rusAlphabetUpper[pos];
      result += symbol;
    }
    if ((isContain(symbol, rusAlphabetLowerEncrypt))) {
      symbol = rusAlphabetLower[pos];
      result += symbol;
    }
    if (isContain(symbol, engAlphabetUpperEncrypt)) {
      symbol = engAlphabetUpper[pos];
      result += symbol;
    }
    if ((isContain(symbol, engAlphabetLowerEncrypt))) {
      symbol = engAlphabetLower[pos];
      result += symbol;
    }
  }
  return result;
}

encryptButton.addEventListener('click', function() {
  shiftAlphabets();
  cryptedText = originalText.value;
  encryptedText.value = encrypt(cryptedText);
});

decryptButton.addEventListener('click', function() {
  shiftAlphabets();
  cryptedText = encryptedText.value;
  originalText.value = decrypt(cryptedText);
});