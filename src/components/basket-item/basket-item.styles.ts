import styled from "styled-components";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const BasketItemStyled = styled.div`
  .basket-item-container {
    .basket-product-name {
      font-weight: ${fontWeight.regular};
      font-size: ${fontSize.medium};
      line-height: 18px;
      letter-spacing: 0.16px;
      color: ${commonColors.black};
    }
    .basket-product-price-container {
      display: flex;
      padding-top: 4px;

      font-weight: ${fontWeight.semibold};
      font-size: ${fontSize.medium};
      line-height: 18px;
      letter-spacing: 0.16px;
      color: #${commonColors.primary};
    }
  }
`;
