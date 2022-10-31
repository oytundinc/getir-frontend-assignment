import { Card } from "antd";
import React, { useCallback } from "react";
import { CURRENCY_SYMBOL } from "../../common/constants/currency";
import { Button } from "../button/button";
import { ProductCardStyled } from "./product-card.styles";
import productImg from "../../assets/productImg.png";
import { useDispatch } from "react-redux";
import { ACTION_TYPES } from "../../store/action-types";

export interface ProductCardProps {
  productId: string | number;
  productPrice: number;
  productBrand: string;
  productName?: string;
  productTags: string[];
  className?: string;
}

const WrappedProductCard = ({
  productId,
  productPrice,
  productBrand,
  productTags,
  productName,
}: ProductCardProps) => {
  const dispatch = useDispatch();
  const handleAddToBasket = useCallback(() => {
    dispatch({
      type: ACTION_TYPES.ADD_PRODUCT_TO_BASKET,
      payload: {
        id: productId,
        name: productName || "",
        price: productPrice,
      },
    });
  }, [dispatch, productId, productName, productPrice]);
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
          <Button onClick={handleAddToBasket}>Add</Button>
        </div>
      </Card>
    </ProductCardStyled>
  );
};

export const ProductCard = React.memo(WrappedProductCard);
