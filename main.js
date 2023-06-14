let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createBooks() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').value;
  let bookObj = new Book(title, author, pages, read);
  return bookObj;
}


function addBookToLibrary(event) {
    event.preventDefault();
    let book = createBooks();
    myLibrary.push(book);
    document.querySelector('#user-form').reset();
    displayBook();
}


function displayBook(){
    let container = document.querySelector('.container');
    container.innerHTML = '';

    for(let i= 0; i <= myLibrary.length; i++) {

        let bookItem = myLibrary[i];
        let card = document.createElement('div');
        card.classList.add('card');

        let titleElement = document.createElement('p');
        titleElement.textContent = `Title: ${bookItem.title}`;
        let authorElement = document.createElement('p');
        authorElement.textContent = `Author: ${bookItem.author}`;
        let pageElement = document.createElement('p');
        pageElement.textContent = `Number of pages: ${bookItem.pages} pages`;
        let readElement = document.createElement('p');
        readElement.textContent = `Read: ${bookItem.read}`;

        card.appendChild(titleElement);
        card.appendChild(authorElement);
        card.appendChild(pageElement);
        card.appendChild(readElement);
        container.appendChild(card);
    }
    
}
 
function toggleForm() {
    let form = document.querySelector('#user-form');
    form.classList.toggle('hide');
}

let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', addBookToLibrary);

let toggleButton = document.querySelector('.toggle');
toggleButton.addEventListener('click', toggleForm);
