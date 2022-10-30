import React from "react";
import { BasketItemStyled } from "./basket-item.styles";

export interface BasketItemProps {
  productName: string;
  productPriceCurrency: string;
  productPrice: number;
  className?: string;
}

const WrappedBasketItem = ({
  productName = "Example Product",
  productPriceCurrency = "₺",
  productPrice = 10,
}: BasketItemProps) => {
  return (
    <BasketItemStyled>
      <div className="basket-item-container">
        <div className="basket-product-name">{productName}</div>
        <div className="basket-product-price-container">
          <div className="basket-product-price-currency">
            {productPriceCurrency}
          </div>
          <div className="basket-product-price">{productPrice}</div>
        </div>
      </div>
    </BasketItemStyled>
  );
};

export const BasketItem = React.memo(WrappedBasketItem);
