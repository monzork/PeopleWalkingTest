import { createAction, props } from '@ngrx/store';

export const searchParam = createAction('[Search Component] Search',
  props<{ searchParam: string }>()
);
export const reset = createAction('[Search Component] Reset');
export const add = createAction('[Search Component] Add',
  props<{ searches: string[] }>()
);
