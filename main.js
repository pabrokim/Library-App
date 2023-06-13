let myLibrary = [];

function createBooks() {
  let title = prompt('the title');
  let author = prompt('author');
  function Book(title, author) {
  this.title = title
  this.author = author
  }
  let book = new Book(title, author);
  return book;
  
}

function addBookToLibrary() {
    let books = prompt('Enter the number of books');    
    for(let i =0; i <= books.length; i++) {
        let book = createBooks();
        myLibrary.push(book);
    }
}

function displayBook(){
    
    addBookToLibrary()

    let container = document.querySelector('.container');
    
    for(let i= 0; i <= myLibrary.length; i++) {
        let items = myLibrary[i];
        let card = document.createElement('div');
        card.classList.add('card');
        let titleElement = document.createElement('p');
        titleElement.textContent = `title: ${items.title}`;
        let authorElement = document.createElement('p');
        authorElement.textContent = `author: ${items.author}`;
        card.appendChild(titleElement);
        card.appendChild(authorElement);
        container.appendChild(card);
    }
    
}
displayBook();
