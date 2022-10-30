import { Card } from "antd";
import React from "react";
import { CURRENCY_SYMBOL } from "../../common/constants/currency";
import { Button } from "../button/button";
import { ProductCardStyled } from "./product-card.styles";

export interface ProductCardProps {
  productPrice: number;
  productBrand: string;
  productTag: string;
  className?: string;
}

const WrappedProductCard = ({
  productPrice,
  productBrand,
  productTag,
}: ProductCardProps) => {
  return (
    <ProductCardStyled>
      <Card>
        <div className="product-card-container">
          <img src="" alt="" />
          <div className="product-card-text-container">
            <span className="product-card-price">{CURRENCY_SYMBOL.TRY} {productPrice}</span>
            <span className="product-card-brand">{productBrand}</span>
            <span className="product-card-tag">{productTag}</span>
          </div>
          <Button>Add</Button>
        </div>
      </Card>
    </ProductCardStyled>
  );
};

export const ProductCard = React.memo(WrappedProductCard);
