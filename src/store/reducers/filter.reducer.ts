import produce from "immer";
import { ACTION_TYPES } from "../action-types";

export type CategoryType = string;
export type TagType = string;
export type BrandType = string;

interface CompanyType {
  slug: string;
  name: string;
}

interface FilterState {
  tags: TagType[];
  brands: BrandType[];
  companies: Record<string, CompanyType>;
}

const initialState: FilterState = {
  tags: [],
  brands: [],
  companies: {},
};

export const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.SET_ALL_OF_COMPANIES: {
      return produce(state, (draft) => {
        action.payload.forEach((item: CompanyType) => {
          if (!state.companies[item.slug]) {
            state.companies[item.slug] = item;
          }
        });
      });
    }

    case ACTION_TYPES.SET_ALL_OF_PRODUCTS: {
      return produce(state, (draft) => {
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
        draft.tags = tags;
        draft.brands = brands;
      });
    }

    default:
      return state;
  }
};
