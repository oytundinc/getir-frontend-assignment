import { Card } from "antd";
import React from "react";
import { CURRENCY_SYMBOL } from "../../common/constants/currency";
import { Button } from "../button/button";
import { ProductCardStyled } from "./product-card.styles";
import productImg from "../../assets/productImg.png";

export interface ProductCardProps {
  productPrice: number;
  productBrand: string;
  productTags: string[];
  className?: string;
}

const WrappedProductCard = ({
  productPrice,
  productBrand,
  productTags,
}: ProductCardProps) => {
  return (
    <ProductCardStyled>
      <Card>
        <div className="product-card-container">
          <div className="product-img">
            <img src={productImg} alt="product img" className="product-logo" />
          </div>
          <div className="product-card-text-container">
            <span className="product-card-price">
              {CURRENCY_SYMBOL.TRY} {productPrice}
            </span>
            <span className="product-card-brand">{productBrand}</span>
            <span className="product-card-tag">{productTags.join(", ")}</span>
          </div>
          <Button>Add</Button>
        </div>
      </Card>
    </ProductCardStyled>
  );
};

export const ProductCard = React.memo(WrappedProductCard);
