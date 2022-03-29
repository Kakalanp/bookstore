import { CHECK } from '../../actionTypes';

// Reducer
export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default:
      return state;
  }
}

// Action creators
export function check() {
  return { type: CHECK };
}
