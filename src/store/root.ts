import { combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ACTION_TYPES } from "./action-types";

const initialState = {
  companies: [],
  products: [],
  tags: [],
  brands: [],
};

const globalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.SET_ALL_OF_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };

    case ACTION_TYPES.SET_ALL_OF_PRODUCTS:
      const products = action.payload;
      const tags: string[] = [];
      const brands: string[] = [];

      products.forEach((productItem: any) => {
        if (
          productItem &&
          productItem.tags &&
          Array.isArray(productItem.tags) &&
          productItem.tags.length > 0
        ) {
          productItem.tags.forEach((tag: string) => {
            if (!tags.includes(tag)) {
              tags.push(tag);
            }
          });
        }

        if (
          productItem &&
          productItem.manufacturer &&
          !brands.includes(productItem.manufacturer)
        ) {
          brands.push(productItem.manufacturer);
        }
      });

      return {
        ...state,
        products,
        tags,
        brands,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  global: globalReducer,
});

export function configureStore(preloadedState = {}) {
  const middlewareEnhancer = composeWithDevTools();

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers) as unknown as any;

  return createStore(rootReducer, preloadedState, composedEnhancers);
}
