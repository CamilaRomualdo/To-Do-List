import { createAction, props } from '@ngrx/store';

export const clearTodos = createAction('[TODO] Clear Todos');

export const createTodo = createAction(
  '[TODO] Create Todo',
  props<{ name: string }>()
);

export const updateTodo = createAction(
  '[TODO] Update Todo',
  props<{ id: number, name: string }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] Toggle TodoAll',
  props<{ status: boolean }>()
);
