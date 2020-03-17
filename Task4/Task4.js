const inputField = document.getElementById('input-field');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const equalButton = document.getElementById('equal-button');
const clearButton = document.getElementById('clear-button');
let resultDisplayed = false;

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function(e) {
    var currentString = inputField.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (resultDisplayed === false) {
      inputField.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
      resultDisplayed = false;
      inputField.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      inputField.innerHTML = "";
      inputField.innerHTML += e.target.innerHTML;
    }
  });
}

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function(e) {
    var currentString = inputField.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      inputField.innerHTML = newString;
    } else if (currentString.length == 0) {
    } else {
      inputField.innerHTML += e.target.innerHTML;
    }
  });
}

equalButton.addEventListener('click', function() {
  inputField.innerHTML = eval(inputField.innerHTML);
  resultDisplayed = true;
});

clearButton.addEventListener('click', function() {
  inputField.innerHTML = '';
});