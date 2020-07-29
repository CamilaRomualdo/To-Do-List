import {createReducer, on} from '@ngrx/store';
import {Todo} from '../../models/todo.model';
import {createTodo, updateTodo, deleteTodo, toggle, toggleAll, clearTodos} from './todo.action';

export const initialState: Todo[] = [
  new Todo('Go to the GYM'),
  new Todo('Learn Java'),
  new Todo('Play Video Games')
];

// tslint:disable-next-line:variable-name
const _todoReducer = createReducer(initialState,
  on(createTodo, (state, {name}) => [...state, new Todo(name)]),

  on(updateTodo, (state, {id, name}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          name: name
        };
      } else {
        return todo;
      }
    });
  }),

  on(deleteTodo, (state, {id}) => state.filter(todo => todo.id !== id)),

  on(clearTodos, state => state.filter(todo => !todo.status)),

  on(toggle, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status
        };
      } else {
        return todo;
      }
    });
  }),

  on(toggleAll, (state, {status}) => state.map(todo => {
    return {
      ...todo,
      status: status
    };
  })),


);

// tslint:disable-next-line:typedef
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
