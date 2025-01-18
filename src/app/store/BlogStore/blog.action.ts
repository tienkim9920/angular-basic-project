import { createAction, props } from '@ngrx/store';
import { ProductItems } from '../../shared/types/productItem';

export const setBlogList = createAction(
  '[Blog] SetBlogList',
  props<{ blogs: ProductItems[] }>()
);