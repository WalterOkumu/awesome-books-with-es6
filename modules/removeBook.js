export const removeBook = (event) => {
  const bookDiv = document.getElementsByClassName('book-list')[0];
  const objectId = event.target.id;

  // eslint-disable-next-line max-len
  const newBookList = bookList.filter((book) => book.Title !== bookList[objectId].Title);

  bookList = newBookList;

  bookDiv.innerText = '';
  updateStorage();
  populateBook();
}