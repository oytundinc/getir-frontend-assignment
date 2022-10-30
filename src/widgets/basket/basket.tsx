import { Divider } from "antd";
import { BasketItem } from "../../components/basket-item/basket-item";
import { Card } from "../../components/card/card";
import { ItemCounter } from "../../components/itemCounter/itemCounter";
import TotalAmount from "../../components/total-amount/total-amount";
import { BasketStyled } from "./basket.styles";

export const WrappedBasket = () => {
  return (
    <BasketStyled>
      <div className="basket-container">
        <Card>
          <>
            <div className="basket-product-list">
              <BasketItem
                productName={"Example Product"}
                productPriceCurrency={"₺"}
                productPrice={10}
              />
              <ItemCounter />
            </div>
            <Divider />
            <div className="basket-product-list">
              <BasketItem
                productName={"Example Product"}
                productPriceCurrency={"₺"}
                productPrice={10}
              />
              <ItemCounter />
            </div>
            <Divider />
            <TotalAmount totalbasketamount={10}/>
          </>
        </Card>
      </div>
    </BasketStyled>
  );
};

export const Basket = WrappedBasket;
