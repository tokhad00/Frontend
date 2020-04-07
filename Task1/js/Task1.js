function loadFile(filename, requiredData) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', filename, true);
  xhr.onload = function() {
    const data = this.responseText;
    const parseData = JSON.parse(data);
    if (requiredData === 'retailers') {
      renderRetailers(parseData);
    }
    if (requiredData === 'markets') {
      renderMarkets(parseData);
    }
  }
  xhr.send(null);
}

function renderRetailers(retailers) {
  let links = [];
  const table = document.getElementById('retailers-table');
  table.innerHTML = '';
  
  retailers.forEach((retailer) => {
    table.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${retailer.id}</td>
        <td class="name-button">${retailer.name}</td>
        <td>${retailer.year}</td>
        <td>${retailer.description}</td>
      </tr>`);
    links.push(`${retailer.markets}`);
  });

  const nameButtons = Array.from(document.getElementsByClassName('name-button'));
  
  for (let i = 0; i < nameButtons.length; i++) {
    nameButtons[i].addEventListener('click', function() {
      loadFile(`${links[i]}`, 'markets');
    })
  }
}

function renderMarkets(markets) {
  let numberOfMarkets = 0,
      totalArea = 0,
      totalNumberOfBuyers = 0;
      
  const table = document.getElementById('markets-table');
  table.innerHTML = `
    <th>Адрес магазина</th>
    <th>Покупателей в среднем за день</th>
    <th>Площадь торгового зала</th>
    <th>Год открытия</th>`;

  markets.forEach((market) => {
    table.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${market.address}</td>
        <td>${market.averageOfBuyers}</td>
        <td>${market.area}</td>
        <td>${market.year}</td>
      </tr>`);
    numberOfMarkets++;
    console.log(numberOfMarkets);
    totalArea += market.area;
    totalNumberOfBuyers += market.averageOfBuyers;
  });

  const marketsInfoWrapper = document.getElementById('markets-info');
  marketsInfoWrapper.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Всего магазинов в сети: ${numberOfMarkets}</h4>
        <p class="card-text">Общая площадь магазинов: ${totalArea}</p>
        <p class="card-text">Средняя площадь: ${Math.round(totalArea/numberOfMarkets)}</p>
        <p class="card-text">Всего покупателей по сети за день: ${totalNumberOfBuyers}</p>
      </div>
    </div>`;
}

loadFile('JSON/retailers.json', 'retailers');