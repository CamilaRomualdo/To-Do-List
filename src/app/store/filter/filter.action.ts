import { createAction, props } from '@ngrx/store';

export type todoFilter = 'todos' | 'done' | 'pending';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: todoFilter }>()
);

