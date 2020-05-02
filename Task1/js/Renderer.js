class Renderer {
    renderBook(book, index, container) {
        container = `
            <tr>
                <td class="book-index">${index + 1}</td>
                <td>${book.name}</td>
                <td>${book.numberOfWords}</td>
                <td>${book.year}</td>
                <td>${book.author}</td>
                <td>${book.language}</td>
                <td>${book.nameOfRedaction}</td>
                <td><button class="btn btn-primary delete-book-button">Удалить книгу</button></td>
            </tr>`;
        return container;
    }

    renderLibrary(library, container) {
        const libraryCard = `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title library-name">${library.name}</h3>
                <p class="card-text">Количество книг: ${library.numberOfBooks}</p>
                <p class="card-text">Список языков: ${library.listOfLanguages}</p>
                <p class="card-text">Список авторов: ${library.listOfAuthors}</p>
            </div>
        </div>`;

        container.insertAdjacentHTML('beforeend', libraryCard);

        if (library.books.length !== 0) {
            let booksTable =  `
            <table>
                <th>Номер</th>
                <th>Название</th>
                <th>Количество слов</th>
                <th>Год издания</th>
                <th>Автор</th>
                <th>Язык</th>
                <th>Издательство</th>
                <th>Удаление книги</th>`;
    
            for (let i = 0; i < library.books.length; i++) {
                booksTable += this.renderBook(library.books[i], i, booksTable);
            }
            booksTable += `</table>`;
            container.insertAdjacentHTML('beforeend', booksTable);
        } else {
            container.insertAdjacentHTML('beforeend', `<p>В библиотеке книги отсутствуют</p>`);
        }
    }

    renderPublisher(publisher, container) {
        container.insertAdjacentHTML('beforeend', `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title publisher-name">${publisher.name}</h3>
                <p class="card-text">Рабочий язык: <span class="publisher-language">${publisher.language}</span></p>
                <p><label>Название книги</label><input type="text" class="name-field"></p>
                <p><label>Количество слов</label><input type="text" class="words-field"></p>
                <p><label>Год выпуска</label><input type="text" class="year-field"></p>
                <p><label>Автор</label><input type="text" class="author-field"></p>
                <p><label>Библиотека</label><select class="library-select"></select></p>
                <p><button class="btn btn-primary add-book-button">Добавить книгу</button></p>
            </div>
        </div>`);
    }
}