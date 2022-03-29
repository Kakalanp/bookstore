import { STATUS_CATEGORIES } from '../../actionTypes';

// Reducer
export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case STATUS_CATEGORIES:
      return 'Under construction';
    default:
      return state;
  }
}

// Action creators
export function check() {
  return { type: STATUS_CATEGORIES };
}
