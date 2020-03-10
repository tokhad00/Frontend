let flagOfBelarus = document.createElement('img');
let flagOfUkraine = document.createElement('img');
let flagOfRussia = document.createElement('img');
let flagOfPoland = document.createElement('img');
let flagOfLithuania = document.createElement('img');
let flagOfLatvia = document.createElement('img');

flagOfBelarus.src = 'belarus.jpg';
flagOfUkraine.src = 'ukraine.png';
flagOfRussia.src = 'russia.png';
flagOfPoland.src = 'poland.png';
flagOfLithuania.src = 'lithuania.png';
flagOfLatvia.src = 'latvia.png';

const countries = [];

countries.push({
    name: "Беларусь",
    area: 207595,
    population: 9475174,
    language: "Белорусский, русский",
    telCode: "+375",
    flag: flagOfBelarus.src
});

countries.push({
    name: "Украина",
    area: 603549,
    population: 41732779,
    language: "Украинский",
    telCode: "+380",
    flag: flagOfUkraine.src
});

countries.push({
    name: "Россия",
    area: 17125191,
    population: 146745098,
    language: "Русский",
    telCode: "+7",
    flag: flagOfRussia.src
});

countries.push({
    name: "Польша",
    area: 312679,
    population: 38313035,
    language: "Польский",
    telCode: "+48",
    flag: flagOfPoland.src
});

countries.push({
    name: "Литва",
    area: 65301,
    population: 2790472,
    language: "Литовский",
    telCode: "+370",
    flag: flagOfLithuania.src
});

countries.push({
    name: "Латвия",
    area: 64589,
    population: 1934379,
    language: "Латвийский",
    telCode: "+371",
    flag: flagOfLatvia.src
});

function printCountries() {
    const table = document.getElementById("countriesTable");
    const trTitle = document.createElement('tr');
    trTitle.innerHTML = `<th>Название</th><th>Площадь, кв.км</th><th>Население, чел.</th><th>Государственный язык</th>
        <th>Телефонный код</th><th>Флаг</th>`;
    table.appendChild(trTitle);

    for (let i = 0; i < countries.length; i++) {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.innerHTML = `${countries[i].name}`;
        tr.appendChild(tdName);
        const tdArea = document.createElement('td');
        tdArea.innerHTML = `${countries[i].area}`;
        tr.appendChild(tdArea);
        const tdPopulation = document.createElement('td');
        tdPopulation.innerHTML = `${countries[i].population}`;
        tr.appendChild(tdPopulation);
        const tdLanguage = document.createElement('td');
        tdLanguage.innerHTML = `${countries[i].language}`;
        tr.appendChild(tdLanguage);
        const tdCode = document.createElement('td');
        tdCode.innerHTML = `${countries[i].telCode}`;
        tr.appendChild(tdCode);
        const tdFlag = document.createElement('td');
        const flag = document.createElement('img');
        flag.setAttribute('src', `${countries[i].flag}`);
        tdFlag.appendChild(flag);
        tr.appendChild(tdFlag);
        table.appendChild(tr);
    }
}
  
printCountries();