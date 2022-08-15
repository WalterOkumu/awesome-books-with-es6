import navigateAddNew from './modules/navigateAddNew.js';
import navigateList from './modules/navigateList.js';
import navigateContact from './modules/navigateContact.js';
import { DateTime } from './modules/luxon.js';
import addBook from './modules/addBook.js';
import removeBook from './modules/removeBook.js';
import loadFromStorage from './modules/loadFromStorage.js';
import updateStorage from './modules/updateStorage.js';

const list = document.getElementById('list-link');
const addNew = document.getElementById('add-new-link');
const contact = document.getElementById('contact-link');

const sectionList = document.getElementsByClassName('list')[0];
const sectionAddBook = document.getElementsByClassName('add-book')[0];
const sectionContact = document.getElementsByClassName('contact')[0];

// Navigation links on-click event listeners
list.onclick = () => {
  navigateList(list, sectionList, addNew, sectionAddBook, contact, sectionContact);
};

addNew.onclick = () => {
  navigateAddNew(list, sectionList, addNew, sectionAddBook, contact, sectionContact);
};

contact.onclick = () => {
  navigateContact(list, sectionList, addNew, sectionAddBook, contact, sectionContact);
};

// Update current date and time
document.getElementsByClassName('date')[0].innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);

// Functions area

window.onclick = (event) => {
  if (event.target.className === 'add-button') {
    addBook();
  } else if (event.target.className === 'remove-button') {
    removeBook(event);
  }
};

window.onload = () => {
  let bookList = window.localStorage.getItem('bookList');

  if ((bookList === null) || (bookList === undefined)) {
    bookList = [];
    updateStorage(bookList);
  } else {
    loadFromStorage();
  }
};