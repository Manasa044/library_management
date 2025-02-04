function Book(title, author, publisher, isbn, copies) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.isbn = isbn;
    this.copies = copies;
}

// Create array to hold book objects
var library = [];

// Show the specified section and hide the others
function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}

// Add book to library array
function addBook() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var publisher = document.getElementById("publisher").value;
    var isbn = document.getElementById("isbn").value;
    var copies = document.getElementById("copies").value;
    var book = new Book(title, author, publisher, isbn, copies);
    library.push(book);
    displayBooks();
    clearAddBookForm();
}

// Remove book from library array
function removeBook() {
    var isbn = document.getElementById("removeIsbn").value;
    for (var i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            library.splice(i, 1);
            break;
        }
    }
    displayBooks();
    clearRemoveBookForm();
}

// Search for book by title, author, or ISBN
function searchBook() {
    var search = document.getElementById("search").value.toLowerCase();
    var matches = [];
    for (var i = 0; i < library.length; i++) {
        if (library[i].title.toLowerCase().includes(search) || library[i].author.toLowerCase().includes(search) || library[i].isbn.toLowerCase().includes(search)) {
            matches.push(library[i]);
        }
    }
    displayBooks(matches);
}

// Display all books in library array
function displayBooks(books) {
    var bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    if (!books) {
        books = library;
    }
    for (var i = 0; i < books.length; i++) {
        var tr = document.createElement("tr");
        var tdTitle = document.createElement("td");
        tdTitle.innerText = books[i].title;
        var tdAuthor = document.createElement("td");
        tdAuthor.innerText = books[i].author;
        var tdPublisher = document.createElement("td");
        tdPublisher.innerText = books[i].publisher;
        var tdIsbn = document.createElement("td");
        tdIsbn.innerText = books[i].isbn;
        var tdCopies = document.createElement("td");
        tdCopies.innerText = books[i].copies;
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdPublisher);
        tr.appendChild(tdIsbn);
        tr.appendChild(tdCopies);
        bookList.appendChild(tr);
    }
}

// Clear the add book form
function clearAddBookForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("isbn").value = "";
    document.getElementById("copies").value = "";
}
function clearRemoveBookForm() {
    document.getElementById("removeIsbn").value = "";
}
// Initially show the 'Add Book' section
showSection('addBookSection');
