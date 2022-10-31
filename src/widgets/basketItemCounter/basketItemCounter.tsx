import { useCallback } from "react";
import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { BasketItemCounterStyled } from "./basketItemCounter.styles";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../../store/action-types";

export interface ItemCounterProps {
  productId: number;
}

export const WrappedBasketItemCounter = ({ productId }: ItemCounterProps) => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state: any) => state.basket.items);

  const handleDecreaseAmount = useCallback(() => {
    dispatch({
      type: ACTION_TYPES.DECREASE_PRODUCT_AMOUNT,
      payload: {
        id: productId,
      },
    });
  }, [dispatch, productId]);
  const handleIncreaseAmount = useCallback(() => {
    dispatch({
      type: ACTION_TYPES.INCREASE_PRODUCT_AMOUNT,
      payload: {
        id: productId,
      },
    });
  }, [dispatch, productId]);

  return (
    <BasketItemCounterStyled>
      <div className="item-counter-container">
        <Button className="decrease-btn" onClick={handleDecreaseAmount} icon>
          <MinusOutlined />
        </Button>
        <Button className="count-btn">{basketItems[productId].amount}</Button>
        <Button className="increase-btn" onClick={handleIncreaseAmount}>
          <PlusOutlined />
        </Button>
      </div>
    </BasketItemCounterStyled>
  );
};

export const BasketItemCounter = WrappedBasketItemCounter;
