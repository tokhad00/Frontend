const analyzeButton = document.getElementById('analyze-button');
const filenameField = document.getElementById('filename-field');
const errorString = document.getElementById('error-string');
let arrayOfSymbols = [];

filenameField.addEventListener('input', function() {
  if (filenameField.files[0] !== undefined) {
    errorString.innerHTML = '';
    filenameField.classList.remove('red-border');
  }
});

analyzeButton.addEventListener('click', function() {
  const filename = filenameField.files[0];

  if (!filename) {
    errorString.innerHTML = 'Вы не выбрали файл!';
    filenameField.classList.add('red-border');
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    processData(reader.result);
  }
  reader.readAsText(filename);
});

function processData(result) {
  arrayOfSymbols = [];
  const splittedData = result.split('');
  const checkedSymbols = getSplittedSymbols(splittedData);
  createObjects(splittedData, checkedSymbols);
  const sortedSymbols = [...arrayOfSymbols].sort((a, b) => b.number - a.number);
  renderSymbols(sortedSymbols);
}

function getSplittedSymbols(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

function createObjects(unsplittedSymbols, splittedSymbols) {
  let number = 0;
  let currentSymbol = '';
  for (let i = 0; i < splittedSymbols.length; i++) {
    for (let j = 0; j < unsplittedSymbols.length; j++) {
      if (unsplittedSymbols[j] === splittedSymbols[i]) {
        number++;
      }
      currentSymbol = splittedSymbols[i];

      if (currentSymbol.charCodeAt() === 32) {
        currentSymbol = 'Пробел';
      }

      if (currentSymbol.charCodeAt() === 13) {
        currentSymbol = 'Новая строка';
      }

      if (currentSymbol.charCodeAt() === 10) {
        currentSymbol = 'Возврат каретки';
      }
    }

    const object = {
      symbol: currentSymbol,
      number: number
    }

    arrayOfSymbols.push(object);
    number = 0;
  }
}

function renderSymbols(arrayOfObjects) {
  const table = document.getElementById('result-table');
  table.innerHTML = `
    <th>Символ</th>
    <th>Количество повторений</th>`;

    arrayOfObjects.forEach((object) => {
    table.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${object.symbol}</td>
        <td>${object.number}</td>
      </tr>`);
  });
}