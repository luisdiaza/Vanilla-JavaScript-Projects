//Book Constructor: handles creating actual book object
function Book (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor: a set of prototype methods to add/delete books, and to show alerts
function UI () {

}

//Define UI elements
const bookForm = document.querySelector('.book-form');


// Event Listeners
bookForm.addEventListener('submit', function (e) {
    const title = document.querySelector('.title').value,
          author = document.querySelector('.author').value,
          isbn = document.querySelector('.isbn').value;

    console.log(title, author, isbn);

    e.preventDefault();
})
