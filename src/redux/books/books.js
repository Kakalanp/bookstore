import { ADD, REMOVE } from '../../actionTypes';

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
    case ADD:
      return [...state, newBook(action)];
    case REMOVE:
      return deleteBook(action.id, state);
    default:
      return state;
  }
}

// Action creators
export function addBook(title, author) {
  return { type: ADD, title, author };
}

export function removeBook(id) {
  return { type: REMOVE, id };
}
