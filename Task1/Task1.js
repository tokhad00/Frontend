const N = Number(prompt("Введите число N: "));

function printTable() {
  const table = document.getElementById('multTable');

  for (let i = 0; i < N; i++) {
    const tr = document.createElement('tr');
    
    for (let j = 0; j < N; j++) {
      const td = document.createElement('td');
      td.innerText = (i + 1) * (j + 1);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

printTable();