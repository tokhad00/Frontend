const descriptionField = document.getElementById('description-field');
const locationField = document.getElementById('location-field');
const sendButton = document.getElementById("send-button");

sendButton.addEventListener('click', function() {
  const description = descriptionField.value;
  const location = locationField.value;
  loadFile(description, location);
});

function loadFile(description, location) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jobs.github.com/positions.json?description=${description}&location=${location}`, true);
    xhr.onload = function() {
      const data = JSON.parse(this.responseText);
      console.log(data);
      renderVacancies(data);
    }
    xhr.send(null);
}

const options = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
}

function getDate(str) {
  const date = new Date(str);
  return date.toLocaleString('ru', options);
}

function renderVacancies(vacancies) {
  const vacanciesContainer = document.getElementById('vacancies-list');
  vacanciesContainer.innerHTML = '';

  if (vacancies.length === 0) {
    vacanciesContainer.innerHTML = 'Вакансий по заданным параметрам не найдено';
  }
  
  vacancies.forEach((vacancy) => {
    if (vacancy.company_logo === null) {
      vacancy.company_logo = "logo.jpg";
    }
    const vacancyCard = `
      <div class="card">
        <div class="card-body">
          <h3 class="card-title"><span class="bold">${vacancy.title}</span></h4>
          <p class="card-text">Дата размещения: ${getDate(vacancy.created_at)}</p>
          <figure>
            <img src="${vacancy.company_logo}">
            <figcaption>
              <p class="card-text"><span class="bold">${vacancy.company}</span></p>
              <p class="card-text"><a href="${vacancy.company_url}">Сайт компании</a></p>
            </figcaption>
          </figure>
          <p class="card-text">Расположение: ${vacancy.location}</p>
          <p class="card-text">Тип занятости: ${vacancy.type}</p>
          <p class="card-text">Текст вакансии: ${vacancy.description}</p>
          <p class="card-text" class="larger-text"><a class="larger-text" href="${vacancy.url}">Ссылка на вакансию на GitHub</a></p>
        </div>
      </div>`;
      
    vacanciesContainer.insertAdjacentHTML('beforeend', vacancyCard);
  });
}