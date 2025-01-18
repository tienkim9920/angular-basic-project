import { ProductItems } from "../shared/types/productItem";

export interface AppState {
  counter: number;
  blogs: ProductItems[];
};

export const initialAppState: AppState = {
  counter: 50,
  blogs: [],
};
