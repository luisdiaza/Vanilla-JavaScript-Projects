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

//Show alert
UI.prototype.showAlert = function(message, className) {
    //Create div
    const div = document.createElement('div');
    //Add class name
    div.className = `alert ${className}`; //assigns class name of alert and passed in className to div
    //Add text node
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    //Get form
    const form = document.querySelector('.book-form');
    //Insert Alert
    container.insertBefore(div, form);

    //Timeout after 3 seconds
    setTimeout(function (){
        document.querySelector('.alert').remove();
    }, 3000);
}

//Delete book
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

//Clear submit fields
UI.prototype.clearFields = function() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    document.querySelector('.isbn').value = '';
}

//Define UI elements
const bookForm = document.querySelector('.book-form');


// Event Listener for add book
bookForm.addEventListener('submit', function (e) {
    //Get form values
    const title = document.querySelector('.title').value,
          author = document.querySelector('.author').value,
          isbn = document.querySelector('.isbn').value;

    //Create book object
    const book = new Book(title, author, isbn);

    //Create UI object
    const ui = new UI();

    //Validations
    if (title === '' || author === '' || isbn === '') {
        //Error alert
        ui.showAlert('Please fill in all fields', 'error');
    }
    else {
        //Add book to List
        ui.addBookToList(book);

        //Show that book was sucessfully added
        ui.showAlert('Book Added!', 'success');

        //Clear submit fields
        ui.clearFields();
    }

    e.preventDefault();
});

//Event Listener for delete
const bookList = document.querySelector('.book-list')
bookList.addEventListener('click', function (e){

    //Create UI object
    const ui = new UI();

    //Delete Book
    ui.deleteBook(e.target);

    //Show alert
    ui.showAlert('Book removed!', 'success');

    e.preventDefault();
});
