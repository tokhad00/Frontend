function loadFile(filename) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', filename, true);
  xhr.onload = function() {
    transformData(this.responseText);
  }
  xhr.send(null);
}

function transformData(text) {
  const lines = text.split('\n');
  const names = lines.shift().trim().split(', ');
  const items = lines.map(line => {
    const splittedLine = line.split(', ');
    const object = splittedLine.reduce((result, value, index) => ({
      ...result, [names[index]]: value
    }), {});
    return object;
  });
  renderWorkers(items);
}

function renderWorkers(workers) {
  const table = document.getElementById('workers-table');
  table.innerHTML = '';
  workers.forEach((worker) => {
    table.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${worker.name}</td>
        <td>${worker.age}</td>
        <td>${worker.position}</td>
        <td>${worker.salary}</td>
        <td>${worker.bossName}</td>
      </tr>`);
  });

  nameHead.addEventListener('click', function() {
    const sortedWorkers = [...workers].sort((a, b) => a.name.localeCompare(b.name));
    renderWorkers(sortedWorkers);
  });
  
  ageHead.addEventListener('click', function() {
    const sortedWorkers = [...workers].sort((a, b) => a.age - b.age);
    renderWorkers(sortedWorkers);
  });
  
  positionHead.addEventListener('click', function() {
    const sortedWorkers = [...workers].sort((a, b) => a.position.localeCompare(b.position));
    renderWorkers(sortedWorkers);
  });
  
  salaryHead.addEventListener('click', function() {
    const sortedWorkers = [...workers].sort((a, b) => a.salary - b.salary);
    renderWorkers(sortedWorkers);
  });
  
  bossNameHead.addEventListener('click', function() {
    const sortedWorkers = [...workers].sort((a, b) => a.bossName.localeCompare(b.bossName));
    renderWorkers(sortedWorkers);
  });
}

const nameHead = document.getElementById('name');
const ageHead = document.getElementById('age');
const positionHead = document.getElementById('position');
const salaryHead = document.getElementById('salary');
const bossNameHead = document.getElementById('boss-name');

loadFile('workers.csv');