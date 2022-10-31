import { ACTION_TYPES } from "../action-types";
import produce from "immer";

export interface BasketItemType {
  productId: number;
  name: string;
  price: number;
  amount: number;
}

interface BasketState {
  items: Record<number, BasketItemType>;
}

const initialState: BasketState = {
  items: {},
};

export const basketReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_PRODUCT_TO_BASKET: {
      return produce(state, (draft) => {
        if (!draft.items[action.payload.id]) {
          draft.items[action.payload.id] = {
            productId: action.payload.id,
            price: action.payload.price,
            name: action.payload.name,
            amount: 1,
          };
        } else {
          draft.items[action.payload.id].amount++;
        }
      });
    }

    case ACTION_TYPES.INCREASE_PRODUCT_AMOUNT: {
      return produce(state, (draft) => {
        draft.items[action.payload.id].amount++;
      });
    }

    case ACTION_TYPES.DECREASE_PRODUCT_AMOUNT: {
      return produce(state, (draft) => {
        if (draft.items[action.payload.id].amount === 1) {
          delete draft.items[action.payload.id];
        } else {
          draft.items[action.payload.id].amount--;
        }
      });
    }

    default:
      break;
  }
  return state;
};
