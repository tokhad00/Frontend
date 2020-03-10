const names = ['Андрей', 'Алексей', 'Михаил', 'Олег', 'Даниил', 'Эмиль', 'Томас', 'Марк', 'Владислав', 'Арсений', 'Егор'];
const things = ['Блендер', 'Пароварка', 'Кофеварка', 'Тостер', 'Холодильник', 'Электроплита', 'СВЧ-печь', 'Утюг', 'Машина стиральная'];
const cities = ['Минск', 'Могилев', 'Витебск', 'Гомель', 'Гродно', 'Брест', 'Борисов', 'Жодино', 'Молодечно', 'Орша'];

const dest = document.getElementById('wrapper');
const div = document.createElement('div');

function printCard() {
  div.innerHTML = `<div class="card" style="width: 14rem;">
    <div class="card-body">
      <h5 class="card-title">${names[Math.floor(Math.random() * names.length)]}</h4>
      <p class="card-text">из г. ${cities[Math.floor(Math.random() * cities.length)]}</p>
      <p class="card-text">купил ${Math.round((Math.random() * 4) + 1)} шт.</p>
      <p class="card-text">товара ${things[Math.floor(Math.random() * things.length)]}</p>
    </div>
    </div>`;
  dest.appendChild(div);
}

function startTime() {
  setInterval(printCard, 5000);
  printCard();
  setInterval(() => {
    div.remove();
  }, 4000);
}

startTime();