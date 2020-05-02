class Publisher {
    constructor(name, language) {
        this.name = name;
        this.language = language;
    }

    getNewBook(name, numberOfWords, year, author, language, publisherName) {
        return new Book(name, numberOfWords, year, author, language, publisherName);
    }
}