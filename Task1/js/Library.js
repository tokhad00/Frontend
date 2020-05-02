class Library {
    books = [];
    constructor(name) {
        this.name = name;
    }

    get numberOfBooks() {
        return this.books.length;
    }

    get listOfLanguages() {
        let result = [];
        const listOfBooks = this.books.map(book => book.language);
        for (let elem of listOfBooks) {
            if (!result.includes(elem)) {
                result.push(elem);
            }
        }
        return result;
    }

    get listOfAuthors() {
        let result = [];
        const listOfBooks = this.books.map(book => book.author);
        for (let elem of listOfBooks) {
            if (!result.includes(elem)) {
                result.push(elem);
            }
        }
        return result;
    }

    addBook(book) {
        this.books.push(book);
    }

    deleteBook(index) {
        this.books.splice(index, 1);
    }

    getBooksFromAnotherLibrary(library) {
        const booksForTransfer = library.books;
        for (let i = 0; i < booksForTransfer.length; i++) {
            this.addBook(booksForTransfer[i]);
            library.books.splice(i, 1);
        }
    }
}