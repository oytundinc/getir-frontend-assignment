import { Divider } from "antd";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CURRENCY_SYMBOL } from "../../common/constants/currency";
import { BasketItem } from "../../components/basket-item/basket-item";
import { Card } from "../../components/card/card";
import { BasketItemCounter } from "../basketItemCounter/basketItemCounter";
import TotalAmount from "../../components/total-amount/total-amount";
import { BasketItemType } from "../../store/reducers/basket.reducer";
import { BasketStyled } from "./basket.styles";

export const WrappedBasket = () => {
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
    <BasketStyled>
      <div className="basket-container">
        <Card>
          <>
            {Object.values(basketItems).map((item: BasketItemType) => {
              console.log(item.name)
              return (
                <div key={item.productId}>
                  <div className="basket-product-list">
                    <BasketItem
                      productName={item.name}
                      productPriceCurrency={CURRENCY_SYMBOL.TRY}
                      productPrice={item.price}
                    />
                    <BasketItemCounter productId={item.productId} />
                  </div>
                  <Divider />
                </div>
              );
            })}

            <TotalAmount totalbasketamount={totalPrice} />
          </>
        </Card>
      </div>
    </BasketStyled>
  );
};

export const Basket = WrappedBasket;
