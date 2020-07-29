import { ActionReducerMap } from '@ngrx/store';
import {Todo} from '../models/todo.model';
import {todoFilter} from './filter/filter.action';
import {todoReducer} from './todo/todo.reducer';
import {filterReducer} from './filter/filter.reducer';

export interface GlobalState {
  todos: Todo[];
  filter: todoFilter;
}

export const allReducers: ActionReducerMap<GlobalState> = {
  todos: todoReducer,
  filter: filterReducer
};
