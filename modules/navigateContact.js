export const navigateContact = (list, sectionList, addNew, sectionAddBook, contact, sectionContact) => {
  sectionList.style.display = 'none';
  list.className = 'nav-link';
  sectionAddBook.style.display = 'none';
  addNew.className = 'nav-link';
  sectionContact.style.display = 'block';
  contact.className = 'nav-link active';
}