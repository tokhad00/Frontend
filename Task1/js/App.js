class App {
    libraryNames = [];
    async init() {
        const publishersContainer = document.getElementById('list-of-publishers');
        const books = await this.loadData('js/books.json');
        
        for (let i = 0; i < books.length; i++) {
            const index = (Math.floor(Math.random() * libraries.length + 1) - 1);
            libraries[index].addBook(books[i]);
        }

        this.renderLibraries(libraries);

        for (let k = 0; k < publishers.length; k++) {
            renderer.renderPublisher(publishers[k], publishersContainer);
        }

        this.fillSelects(this.libraryNames);
        this.setEventListeners();
    }

    loadData(path) {
        return new Promise(function(resolve, reject) {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', path, true);
          xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          }
          xhr.onerror = () => reject('Ошибка!');
          xhr.send(null);
        });
    }

    setEventListeners() {
        const addBookButtons = document.getElementsByClassName('add-book-button');
        const deleteBookButtons = document.getElementsByClassName('delete-book-button');

        Array.from(addBookButtons).forEach((button) => {
            button.addEventListener('click', this.addBookInLibrary);
        });

        Array.from(deleteBookButtons).forEach((button) => {
            button.addEventListener('click', app.deleteBookFromLibrary);
        });
    }

    renderLibraries(libraries) {
        const librariesContainer = document.getElementById('list-of-libraries');
        librariesContainer.innerHTML = '';
        for (let j = 0; j < libraries.length; j++) {
            renderer.renderLibrary(libraries[j], librariesContainer);
            this.libraryNames.push(libraries[j].name);
        }
    }

    fillSelects(names) {
        const selects = document.getElementsByClassName('library-select');
        Array.from(selects).forEach((select) => {
            for (let i = 0; i < names.length; i++) {
                const option = document.createElement('option');
                option.setAttribute('value', names[i]);
                option.innerHTML = names[i];
                select.appendChild(option);
            }
        });
    }

    addBookInLibrary() {
        const parentCard = this.parentNode.parentNode;
        const name = parentCard.querySelector('.name-field').value;
        const numberOfWords = parentCard.querySelector('.words-field').value;
        const year = parentCard.querySelector('.year-field').value;
        const author = parentCard.querySelector('.author-field').value;
        const libraryName = parentCard.querySelector('.library-select').value;
        const publisherName = parentCard.querySelector('.publisher-name').innerText;
        const publisherLanguage = parentCard.querySelector('.publisher-language').innerText;
        const newBook = publisher.getNewBook(name, numberOfWords, year, author, publisherLanguage, publisherName);
        libraries.forEach(function(library) {
            if (libraryName === library.name) {
                library.addBook(newBook);
                app.renderLibraries(libraries);
            }
        });
        
        parentCard.querySelectorAll('input[type="text"]').forEach((elem) => {
            elem.value = ' ';
        });
    }

    deleteBookFromLibrary() {
        const parentContainer = this.parentNode.parentNode.parentNode.parentNode.previousElementSibling;
        const parentCard = this.parentNode.parentNode;
        const libraryName = parentContainer.querySelector('.library-name').innerText;
        const bookIndex = parentCard.querySelector('.book-index').innerText;
        libraries.forEach((library) => {
            if (libraryName === library.name) {
                library.deleteBook(bookIndex - 1);
                app.renderLibraries(libraries);
            }
        });
    }
}

const libraries = [new Library('Имени Пушкина'), new Library('Имени Коласа'), new Library('Имени Быкова')];
const publishers = [new Publisher('Мечта поэта', 'Русский'), new Publisher('Свислочское', 'Английский')];

const publisher = new Publisher();
const library = new Library();
const renderer = new Renderer();
const app = new App();
app.init();