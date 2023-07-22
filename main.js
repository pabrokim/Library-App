let myLibrary = [];

const inputField = document.querySelectorAll('input[type=text]');
const numField = document.querySelector('input[type=number]');
const form = document.querySelector('form');
const error = document.querySelector('.error');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

inputField.forEach((input) => {
    const errorElement = input.nextElementSibling;
    input.addEventListener('input', (e) => {
        if(input.validity.valid){
            errorElement.textContent = '';
            errorElement.className = 'error';
        }else {
            showError(input, errorElement);
        }
    })
})
numField.addEventListener('input', (e) => {
    const errorElement = numField.nextElementSibling;
    if(numField.validity.valid){
        error.textContent = '';
        error.className = 'error';
    }else {
        showError(numField, errorElement);
    }
})
form.addEventListener('submit', (e) => {
    if(!inputField.validity.valid) {
        showError();
        e.preventDefault();
       
    }
})
function showError(field, errorElement){
    if(field.validity.valueMissing){
        errorElement.textContent = "Please populate this field";
    }else if(field.validity.tooShort){
        errorElement.textContent = "Text should be at least 3 characters"
    }else if (field.validity.rangeUnderflow){
        errorElement.textContent = "Pages should be at least 10";
    }
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

        let toggleButton = document.createElement('button');
        toggleButton.classList.add('btn');
        toggleButton.textContent = 'Toggle Read Status';
        toggleButton.addEventListener('click', () => toggleReadStatus(i));
        
        let removeButton = document.createElement('button');
        removeButton.classList.add('btn');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {removeBook(i)})

        card.appendChild(titleElement);
        card.appendChild(authorElement);
        card.appendChild(pageElement);
        card.appendChild(readElement);
        card.appendChild(toggleButton);
        card.appendChild(removeButton);
        container.appendChild(card);
    }
    
}
function toggleReadStatus(i) {
    let bookItem = myLibrary[i];
    bookItem.read = !bookItem.read; 
    displayBook(); 
  }

function removeBook(i) {
    myLibrary.splice(i, 1);
    displayBook();
}
 
function toggleForm() {
    let form = document.querySelector('#user-form');
    form.classList.toggle('hide');
}

let submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', addBookToLibrary);

let toggleButton = document.querySelector('.toggle');
toggleButton.addEventListener('click', toggleForm);

