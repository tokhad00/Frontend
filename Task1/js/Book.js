class Book {
    constructor(name, numberOfWords, year, author, language, nameOfRedaction) {
        this.name = name;
        this.numberOfWords = numberOfWords;
        this.year = year;
        this.author = author;
        this.language = language;
        this.nameOfRedaction = nameOfRedaction;
    }

    get numberOfPages() {
        return Math.round(this.numberOfWords / 800);
    }
}