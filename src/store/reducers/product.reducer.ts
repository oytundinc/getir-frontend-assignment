import produce, { original } from "immer";
import { ACTION_TYPES } from "../action-types";
import { BrandType, CategoryType, TagType } from "./filter.reducer";
import _ from "lodash";

export interface Product {
  id: number;
  name: string;
  description: string;
  slug: string;
  price: number;
  manufacturer: string;
  tags: TagType[];
  added: number;
}

export enum SORTING_TYPE {
  PRICE_LOW2HIGH = "PRICE_LOW2HIGH",
  PRICE_HIGH2LOW = "PRICE_HIGH2LOW",
  NEW2OLD = "NEW2OLD",
  OLD2NEW = "OLD2NEW",
}

const SortingRules: Record<SORTING_TYPE, any> = {
  [SORTING_TYPE.PRICE_LOW2HIGH]: ["price", "asc"],
  [SORTING_TYPE.PRICE_HIGH2LOW]: ["price", "desc"],
  [SORTING_TYPE.NEW2OLD]: ["added", "asc"],
  [SORTING_TYPE.OLD2NEW]: ["added", "desc"],
};

interface ProductState {
  list: Product[];
  categories: CategoryType[];
  filteredList: Product[];
  selectedCategory?: CategoryType;
  filterOptions: {
    sorting: SORTING_TYPE;
    pagination?: {};
    brands: BrandType[];
    tags: TagType[];
  };
}

const initialState: ProductState = {
  list: [],
  filteredList: [],
  categories: [],
  filterOptions: {
    sorting: SORTING_TYPE.PRICE_LOW2HIGH,
    brands: [],
    tags: [],
  },
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.SET_ALL_OF_PRODUCTS: {
      return produce(state, (draft) => {
        draft.list = action.payload;

        const categories: CategoryType[] = [];

        action.payload.forEach((productItem: any) => {
          if (
            productItem &&
            productItem.itemType &&
            !categories.includes(productItem.itemType)
          ) {
            categories.push(productItem.itemType);
          }
        });
        draft.categories = categories;
        draft.selectedCategory = categories[0];

        const listByCategory = action.payload.filter(
          (item: any) => item.itemType === draft.selectedCategory
        );
        const sortingRule = SortingRules[state.filterOptions.sorting];
        draft.filteredList = _.orderBy(
          listByCategory,
          [sortingRule[0]],
          [sortingRule[1]]
        );
      });
    }

    case ACTION_TYPES.SELECT_CATEGORY: {
      return produce(state, (draft) => {
        draft.selectedCategory = action.payload;
        draft.filteredList = state.list.filter(
          (item: any) => item.itemType === draft.selectedCategory
        );
      });
    }

    case ACTION_TYPES.SORTING_PRODUCTS: {
      return produce(state, (draft) => {
        const sortingRule = SortingRules[action.payload as SORTING_TYPE];

        console.log(sortingRule);

        draft.filteredList = _.orderBy(
          original(draft.filteredList),
          [sortingRule[0]],
          [sortingRule[1]]
        );

        draft.filterOptions.sorting = action.payload;
      });
    }
    default:
      return state;
  }
};
