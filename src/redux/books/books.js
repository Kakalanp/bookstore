import { ADD_BOOK, REMOVE_BOOK, FETCH_BOOKS } from '../../actionTypes';

// Global variable that counts the number of books
let bookCount = 0;

// Helper functions
function newBook(action) {
  const {
    title, author, id, category,
  } = action;
  return {
    title, author, id, category,
  };
}

function deleteBook(id, state = []) {
  return state.filter((book) => book.id !== id);
}

// Reducers
export default function booksReducer(state = [], action) {
  const bookList = [];
  switch (action.type) {
    case ADD_BOOK:
      return [...state, newBook(action)];

    case REMOVE_BOOK:
      return deleteBook(action.id, state);

    case FETCH_BOOKS:
      Object.entries(action.data).forEach(([key, value]) => {
        bookCount += 1;
        bookList.push({
          id: key,
          title: value[0].title,
          author: value[0].author,
          category: value[0].category,
        });
      });
      // The array bookList is not ordered, I sorted it by id
      bookList.sort((a, b) => {
        if (a.id < b.id) { return -1; }
        if (a.id > b.id) { return 1; }
        return 0;
      });
      return bookList;

    default:
      return state;
  }
}

// Action creators
export const addBook = ({ title, author, category }) => async (dispatch) => {
  const id = `item${bookCount + 1}`;
  bookCount += 1;

  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VpD4DoliMdQTvZBLcSES/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
  })
    .then(() => dispatch({
      type: ADD_BOOK, title, author, id, category,
    }));
};

export const removeBook = ({ id }) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VpD4DoliMdQTvZBLcSES/books/${id}`, {
    method: 'DELETE',
  })
    .then(() => dispatch({ type: REMOVE_BOOK, id }));
};

export const fetchBooks = () => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VpD4DoliMdQTvZBLcSES/books')
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH_BOOKS, data }));
};
