import { Card } from "antd";
import React, { useCallback } from "react";
import { CURRENCY_SYMBOL } from "../../common/constants/currency";
import { Button } from "../button/button";
import { ProductCardStyled } from "./product-card.styles";
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
            <span />
          </div>
          <div className="product-card-text-container">
            <span className="product-card-price">
              {CURRENCY_SYMBOL.TRY} {productPrice}
            </span>
            <span className="product-card-name">{productName}</span>
          </div>
          <div className="ant-btn-container">
            <Button onClick={handleAddToBasket}>Add</Button>
          </div>
        </div>
      </Card>
    </ProductCardStyled>
  );
};

export const ProductCard = React.memo(WrappedProductCard);
