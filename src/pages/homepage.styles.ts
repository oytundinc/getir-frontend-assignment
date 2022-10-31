import styled from "styled-components";
import { commonColors } from "../common/theme/color";
import { fontSize, fontWeight } from "../common/theme/font";

export const HomePageWrapped = styled.div`
  .home-page-container {
    margin: 38px 104px !important;

    .ant-col-12 {
      .product-header {
        display: flex;
        align-items: center;

        font-weight: ${fontWeight.regular};
        font-size: ${fontSize.xxlarge};
        line-height: 26px;
        letter-spacing: 0.25px;
        color: ${commonColors.grayxDark};
      }

      .product-btn {
        display: flex;
        padding-bottom: 16px;
        .ant-btn {
          margin-right: 8px;
        }
      }
    }

    .ant-col-6 {
      .item-counter-container {
        .count-btn {
          padding: 0px;
        }
      }

      .brands-container,
      .tags-container {
        padding-top: 24px;
      }
    }
  }
`;
