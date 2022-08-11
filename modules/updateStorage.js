export const updateStorage = () => {
  if (storageAvailable('localStorage')) {
    const { localStorage } = window;
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }
}