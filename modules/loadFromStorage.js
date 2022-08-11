export const loadFromStorage = () => {
  if (storageAvailable('localStorage')) {
    const { localStorage } = window;
    const bookData = JSON.parse(localStorage.getItem('bookList'));
    if (bookData !== null) {
      bookList = bookData;
      populateBook();
    }
  }
}