import { createReducer } from '@ngrx/store';
import { initialAppState } from './app.state';

export const counterReducer = createReducer(initialAppState.counter);