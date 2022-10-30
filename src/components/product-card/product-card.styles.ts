import styled from "styled-components";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const ProductCardStyled = styled.div`
  .ant-card {
    .ant-card-body {
      .product-card-container {
        .product-card-text-container {
          .product-card-price {
            font-weight: ${fontWeight.regular};
            font-size: ${fontSize.medium};
            line-height: 20px;
            color: #1ea4ce;
          }

          .product-card-brand,
          .product-card-tag {
            font-weight: ${fontWeight.semibold};
            font-size: ${fontSize.medium};
            line-height: 20px;
            color: ${commonColors.black};
          }
          display: grid;
        }
        .ant-btn {
          padding: 1px 16px;
        }
      }
    }
  }
`;
