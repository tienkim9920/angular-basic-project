import { createReducer, on } from '@ngrx/store';
import { initialAppState } from './app.state';
import { decrement, increment, reset } from './counter.action';

export const counterReducer = createReducer(initialAppState.counter,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => 0),
);