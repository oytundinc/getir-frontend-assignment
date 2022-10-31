import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CURRENCY_SYMBOL } from "../../common/constants/currency";
import { BasketItemType } from "../../store/reducers/basket.reducer";
import { TotalAmountStyled } from "./total-amount.styles";

export interface TotalAmountProps {
  totalbasketamount?: number;
}

const TotalAmount = () => {
  const basketItems: Record<number, BasketItemType> = useSelector(
    (state: any) => state.basket.items
  );

  const totalPrice = useMemo(() => {
    let total = 0;
    Object.values(basketItems).forEach((item: BasketItemType) => {
      total += item.price * item.amount;
    });
    return total;
  }, [basketItems]);
  return (
    <TotalAmountStyled>
      <div className="total-amount-container">
        <span>{CURRENCY_SYMBOL.TRY}</span>
        <span>{totalPrice}</span>
      </div>
    </TotalAmountStyled>
  );
};

export default TotalAmount;
