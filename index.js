import { navigateAddNew, navigateList, navigateContact, DateTime } from './modules/index.js'

const list = document.getElementById('list-link');
const addNew = document.getElementById('add-new-link');
const contact = document.getElementById('contact-link');

const sectionList = document.getElementsByClassName('list')[0];
const sectionAddBook = document.getElementsByClassName('add-book')[0];
const sectionContact = document.getElementsByClassName('contact')[0];

let bookList = [];

// Navigation links on-click event listeners
list.onclick = function () {
  navigateList(list, sectionList, addNew, sectionAddBook, contact, sectionContact);
};

addNew.onclick = function () {
  navigateAddNew(list, sectionList, addNew, sectionAddBook, contact, sectionContact);
};

contact.onclick = function () {
  navigateContact(list, sectionList, addNew, sectionAddBook, contact, sectionContact);
};

// Update current date and time
document.getElementsByClassName('date')[0].innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);

window.onclick = (event) => {
  if (event.target.className === 'add-button') {
    BookItem.addBook();
  } else if (event.target.className === 'remove-button') {
    BookItem.removeBook(event);
  }
};

window.onload = () => {
  if (JSON.parse(localStorage.getItem('bookList')) === null) {
    BookItem.updateStorage();
  } else {
    BookItem.loadFromStorage();
  }
};