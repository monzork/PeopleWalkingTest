import { createReducer, on } from '@ngrx/store';
import { searchParam } from '../actions/search.actions';

export const initialState: string = '';

const _searchReducer = createReducer(
  initialState,
  on(searchParam, (state, { searchParam }) => searchParam)
)

export function searchReducer(state: any, action: any) {
  return _searchReducer(state, action);
}
