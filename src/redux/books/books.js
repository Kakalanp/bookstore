import { ADD_BOOK, REMOVE_BOOK } from '../../actionTypes';

// Helper function
function newBook(action) {
  const { title, author } = action;
  return { title, author, id: Math.floor(Math.random() * 999999) };
}

function deleteBook(id, state = []) {
  return state.filter((book) => book.id !== id);
}

// Reducers
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, newBook(action)];
    case REMOVE_BOOK:
      return deleteBook(action.id, state);
    default:
      return state;
  }
}

// Action creators
export function addBook(title, author) {
  return { type: ADD_BOOK, title, author };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
