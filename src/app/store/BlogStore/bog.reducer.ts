import { createReducer, on } from '@ngrx/store';
import { initialAppState } from '../app.state';
import { setBlogList } from './blog.action';
import { ProductItems } from '../../shared/types/productItem';

export const blogReducer = createReducer(
  initialAppState.blogs,
  on(setBlogList, (state: ProductItems[], action) => {
    return action.blogs;
  })
);
