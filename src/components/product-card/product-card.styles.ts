import styled from "styled-components";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const ProductCardStyled = styled.div`
  .ant-card-bordered {
    border: none;
    background-color: ${commonColors.white};
  }
  .ant-card {
    height: 225px;

    background-color: ${commonColors.white};
    .ant-card-body {
      .product-card-container {
        .product-img {
          display: flex;
          justify-content: center;

          background: #fefefe;
          border: 1.17666px solid #f3f0fe;
          border-radius: 12px;

          span {
            background-color: #c4c4c4;
            width: 92px;
            height: 92px;
            display: block;
          }
        }

        .product-card-text-container {
          padding: 8px 0;
          .product-card-price {
            font-weight: ${fontWeight.regular};
            font-size: ${fontSize.medium};
            line-height: 20px;
            color: ${commonColors.primary};
          }

          .product-card-brand,
          .product-card-tag {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;

            font-weight: ${fontWeight.semibold};
            font-size: ${fontSize.medium};
            line-height: 20px;
            color: ${commonColors.black};
          }
          display: grid;
        }

        .ant-btn-container {
          margin: 0 8px;
          .ant-btn {
            width: 100%;
            height: 22px;
          }
        }
      }
    }
  }
`;
