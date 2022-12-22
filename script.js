const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

let myLibrary = [];

//////////////////

class Book {
  constructor(tittle, author, pages, isReaded) {
    this.tittle = tittle;
    this.author = author;
    this.pages = pages;
    this.readed = isReaded;
  }
  info() {
    return `${tittle} by ${author}, ${pages} pages, ${`${
      this.readed ? "readed" : "not read yet"
    }`}`;
  }
}

const button = document.getElementById("button");
const tittle = document.getElementById("tittle");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const readed = document.getElementById("readed");

const pa = document.getElementById("pa");

//previusly called fun1
function makeBook() {
  let book = new Book(tittle.value, author.value, pages.value, readed.checked);
  myLibrary.push(book);
  tittle.value = "";
  author.value = "";
  pages.value = "";
}

//form.addEventListener("submit", makeBook);

////////////////////////////////////////////////////////////////////////////////

function displayBook() {
  const bookCard = document.createElement("div");
  bookCard.setAttribute("class", "bookCard");

  const pTittle = document.createElement("p");
  pTittle.innerText = myLibrary[myLibrary.length - 1].tittle;

  const pAuthor = document.createElement("p");
  pAuthor.innerText = `By ${myLibrary[myLibrary.length - 1].author}`;

  const pPages = document.createElement("p");
  pPages.innerText = `${myLibrary[myLibrary.length - 1].pages} pages`;

  //delete button part
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("type", "button");
  deleteButton.innerText = "Delete book";
  deleteButton.addEventListener("click", () => bookCard.remove());
  deleteButton.addEventListener("click", () =>
    myLibrary.splice(
      myLibrary.findIndex((book) => book.tittle == pTittle.innerText),
      1
    )
  );
  //the line above finds the matching book in the library corresponding to the book added
  //in the previous eventlistener
  //////////////////////////////////////////////////////////////////////////////////////
  //toggle button part

  const bReaded = document.createElement("button");
  bReaded.setAttribute("type", "button");
  bReaded.innerText = myLibrary[myLibrary.length - 1].readed
    ? "Readed"
    : "Not Readed";

  bReaded.addEventListener("click", () => {
    myLibrary[
      myLibrary.findIndex((book) => book.tittle == pTittle.innerText)
    ].toggleReaded();
    bReaded.innerText = myLibrary[
      myLibrary.findIndex((book) => book.tittle == pTittle.innerText)
    ].readed
      ? "Readed"
      : "Not Readed";
  });

  ///////////////////////////////////////////////////////////////////////////////////////
  bookCard.appendChild(pTittle);
  bookCard.appendChild(pAuthor);
  bookCard.appendChild(pPages);
  bookCard.appendChild(deleteButton);
  bookCard.appendChild(bReaded);

  const display = document.getElementById("display");
  display.appendChild(bookCard);
}

//form.addEventListener("submit", () => displayBook());
////////////////////////////////////////////////////////////////////////

Book.prototype.toggleReaded = function () {
  if (this.readed) this.readed = false;
  else {
    this.readed = true;
  }
};

///////////////////////////////////

function isValid(element) {
  return element.value.length !== 0;
}

function resetErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach((error) => {
    error.innerText = "";
  });
}

function resetInvalids() {
  const invalids = document.querySelectorAll(".invalid");
  invalids.forEach((invalid) => {
    invalid.classList.remove("invalid");
  });
}

function validation() {
  form.addEventListener("submit", () => {
    resetInvalids();
    resetErrors();
    if (isValid(tittle) && isValid(author) & isValid(pages)) {
      makeBook();
      displayBook();
    } else {
      if (!isValid(tittle)) {
        tittle.classList.add("invalid");
        displayError(tittle);
      }
      if (!isValid(author)) {
        author.classList.add("invalid");
        displayError(author);
      }
      if (!isValid(pages)) {
        pages.classList.add("invalid");
        displayError(pages);
      }
    }
  });

  function displayError(element) {
    const errorP = document.querySelector(`#${element.id} + p`);
    errorP.innerText = `Add a ${element.id}`;
  }
}
validation();
