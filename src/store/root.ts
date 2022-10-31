import { combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./reducers/product.reducer";
import { filterReducer } from "./reducers/filter.reducer";
import { basketReducer } from "./reducers/basket.reducer";

const rootReducer = combineReducers({
  product: productReducer,
  filter: filterReducer,
  basket: basketReducer,
});

export function configureStore(preloadedState = {}) {
  const middlewareEnhancer = composeWithDevTools();

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers) as unknown as any;

  return createStore(rootReducer, preloadedState, composedEnhancers);
}
