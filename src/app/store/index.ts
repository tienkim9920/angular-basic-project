import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { counterReducer } from './counter.reducer';
import { blogReducer } from './BlogStore/bog.reducer';

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
  blogs: blogReducer,
};
