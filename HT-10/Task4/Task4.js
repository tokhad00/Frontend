let tick = document.createElement('img');
tick.src = 'tick.jfif';
const names = ['Блендер', 'Пароварка', 'Кофеварка', 'Тостер', 'Холодильник', 'Электроплита', 'СВЧ-печь', 'Утюг', 'Машина стиральная'];
const things = [];

const N = Number(prompt("Введите число N: "));

for (let i = 0; i < N; i++) {
    const nameIndex = Math.floor(Math.random() * names.length);

    things.push({
        image: tick.src,
        name: names[nameIndex],
        description: "Элемент бытовой техники",
        amount: Math.round(Math.random() * 200),
        price: Math.round(Math.random() * 1500)
    });
}

function printThings() {
    const table = document.getElementById("thingsTable");

    for (let i = 0; i < things.length; i++) {
        if (i % 4 === 0) {
            tr = document.createElement("tr");
        }
        const td = document.createElement("td");
        td.innerHTML = `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <img src="${things[i].image}"/>
              <h4 class="card-title">${things[i].name}</h4>
              <p class="card-text">${things[i].description}</p>
              <p class="card-text">На складе осталось: ${things[i].amount}</p>
              <p class="card-text">Цена: ${things[i].price}</p>
              <a href="#" class="btn btn-primary">Добавить в корзину</a>
            </div>
            </div>`;
        tr.appendChild(td);
        table.appendChild(tr);
      } 
}

printThings();