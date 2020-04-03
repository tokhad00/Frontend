const firstBookButton = document.getElementById('first-book-button');
const secondBookButton = document.getElementById('second-book-button');
const thirdBookButton = document.getElementById('third-book-button');
const bookWrapper = document.getElementById('book-wrapper');

function loadBook(filename) {
  showSpinner();
  const xhr = new XMLHttpRequest();
  xhr.open('GET', filename, true);
  xhr.onload = function() {
    bookWrapper.innerHTML = this.responseText;
  }
  xhr.send(null);
}

function showSpinner() {
  bookWrapper.innerHTML = `
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>`;
}

firstBookButton.addEventListener('click', function() {
  loadBook('book1.txt');
});

secondBookButton.addEventListener('click', function() {
  loadBook('book2.txt');
});

thirdBookButton.addEventListener('click', function() {
  loadBook('book3.txt');
});