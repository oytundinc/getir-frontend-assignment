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
  pagination?: {
    page: number;
    totolRecords: number;
    limit: number;
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
  // pagination: {},
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
        const result = draft.list.filter(
          (item: any) => item.itemType === action.payload
        );

        draft.filteredList = result;
      });
    }

    case ACTION_TYPES.SORTING_PRODUCTS: {
      return produce(state, (draft) => {
        const sortingRule = SortingRules[action.payload as SORTING_TYPE];

        draft.filteredList = _.orderBy(
          original(draft.filteredList),
          [sortingRule[0]],
          [sortingRule[1]]
        );

        draft.filterOptions.sorting = action.payload;
      });
    }

    case ACTION_TYPES.FILTER_PRODUCTS_BY_BRAND: {
      return produce(state, (draft) => {
        draft.filterOptions.brands = action.payload;
        const sortingRule =
          SortingRules[draft.filterOptions.sorting as SORTING_TYPE];

        const list = original(draft.list) as Product[];

        let result = list.filter(
          (item: any) => item.itemType === draft.selectedCategory
        );

        result = _.orderBy(result, [sortingRule[0]], [sortingRule[1]]);

        if (action.payload && action.payload.length > 0) {
          draft.filteredList = result?.filter((item: Product) => {
            return action.payload.includes(item.manufacturer);
          });
        } else {
          draft.filteredList = result;
        }
      });
    }

    case ACTION_TYPES.FILTER_PRODUCTS_BY_TAG: {
      return produce(state, (draft) => {
        draft.filterOptions.tags = action.payload;
        const sortingRule =
          SortingRules[draft.filterOptions.sorting as SORTING_TYPE];

        const list = original(draft.list) as Product[];

        let result = list.filter(
          (item: any) => item.itemType === draft.selectedCategory
        );

        result = _.orderBy(result, [sortingRule[0]], [sortingRule[1]]);

        if (action.payload && action.payload.length > 0) {
          draft.filteredList = result?.filter((item: Product) => {
            let hasTag = false;
            item.tags.forEach((tag) => {
              if (action.payload.includes(tag)) {
                hasTag = true;
                return;
              }
            });
            return hasTag;
          });
        } else {
          draft.filteredList = result;
        }
      });
    }
    default:
      return state;
  }
};
