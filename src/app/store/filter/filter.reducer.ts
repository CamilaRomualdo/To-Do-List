import {createReducer, on} from '@ngrx/store';
import {setFilter, todoFilter} from './filter.action';

export const initialState: todoFilter = 'todos';

// tslint:disable-next-line:variable-name
const _filterReducer = createReducer(initialState,
  on(setFilter, (state, {filter}) => filter),
);

// tslint:disable-next-line:typedef
export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
