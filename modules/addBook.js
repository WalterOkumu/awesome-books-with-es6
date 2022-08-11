export const addBook = () => {
  const bookTitle = document.getElementsByClassName('book-title')[0];
  const author = document.getElementsByClassName('author')[0];

  if (bookTitle.value === '' || author.value === '') {
    // eslint-disable-next-line no-alert
    alert('Please make sure to fill both Title & Author fields!');
  } else {
    bookList.push({
      Title: bookTitle.value,
      Author: author.value,
    });

    bookTitle.value = '';
    author.value = '';

    appendToBook();
    updateStorage();
  }
}