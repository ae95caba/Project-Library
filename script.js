let myLibrary = [];

function Book(tittle,author,isReaded) {
    this.tittle = tittle;
    this.author = author;
    this.pages = pages;
    this.readed = isReaded;
    this.info = function(){
        return `${tittle} by ${author}, ${pages} pages, ${
          `${this.info ? 'readed' : 'not read yet'}`
        }`
    }
  }

  let thehobbit = new Book ("the hobbit","el que hiso de hobbit",false);
  
/////////////////////////////////////////////

const button = document.getElementById("button");
const tittle = document.getElementById("tittle");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const readed = document.getElementById("readed");

const pa = document.getElementById("pa");



function fun1(){
 pa.innerText = tittle.value;
}

button.addEventListener("click",fun1);

