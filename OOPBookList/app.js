//Book Constructor: handles creating actual book object
function Book (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor: a set of prototype methods to add/delete books, and to show alerts
function UI () {}

UI.prototype.addBookToList = function(book){
    const list = document.querySelector('.book-list');

    //Create table row element
    const row = document.createElement('tr');

    //Insert columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

//Clear submit fields
UI.prototype.clearFields = function() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    document.querySelector('.isbn').value = '';
}

//Define UI elements
const bookForm = document.querySelector('.book-form');


// Event Listeners
bookForm.addEventListener('submit', function (e) {
    //Get form values
    const title = document.querySelector('.title').value,
          author = document.querySelector('.author').value,
          isbn = document.querySelector('.isbn').value;

    //Create book object
    const book = new Book(title, author, isbn);

    //Create UI object
    const ui = new UI();

    //Add book to List
    ui.addBookToList(book);

    //Clear submit fields
    ui.clearFields();


    e.preventDefault();
})
