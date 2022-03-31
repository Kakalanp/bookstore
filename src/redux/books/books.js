import { ADD_BOOK, REMOVE_BOOK, FETCH_BOOKS } from '../../actionTypes';

// Helper function
function newBook(action) {
  const { title, author } = action;
  return {
    title, author, id: Math.floor(Math.random() * 999999), category: null,
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
      // {"item1":[{"category":"Fiction","author":"John Smith","title":"The Great Gatsby"}]}
      Object.entries(action.data).forEach(([key, value]) => {
        bookList.push({
          id: key,
          title: value[0].title,
          author: value[0].author,
          category: value[0].category,
        });
      });
      return bookList;
    default:
      return state;
  }
}

// Action creators
export function addBook({ title, author }) {
  return { type: ADD_BOOK, title, author };
}

export function removeBook({ id }) {
  return { type: REMOVE_BOOK, id };
}

export const fetchBooks = () => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VpD4DoliMdQTvZBLcSES/books')
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH_BOOKS, data }));
};

// VpD4DoliMdQTvZBLcSES
