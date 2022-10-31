import styled from "styled-components";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const ProductCardStyled = styled.div`
  .ant-card {
    max-width: 124px;
    max-height: 225px;

    background-color: ${commonColors.white};
    .ant-card-body {
      .product-card-container {
        .product-img {
          display: flex;
          justify-content: center;
          
          background: #fefefe;
          border: 1.17666px solid #f3f0fe;
          border-radius: 12px;
        }

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
