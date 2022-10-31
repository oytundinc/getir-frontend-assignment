import styled from "styled-components";
import { commonColors } from "../../common/theme/color";

export const BasketStyled = styled.div`
  .basket-container {
    border-radius: 2px;

    .ant-card {
      padding: 8px;

      background-color: ${commonColors.primary};

      .ant-card-body {
        padding: 0px 22px;

        .basket-product-list {
          display: flex;
          padding-bottom: 18px;
          padding-top: 18px;
          .basket-item-container {
            padding-right: 43px;
          }
          .item-counter-container {
          }
        }
      }
      .ant-divider {
        margin: 0px;
        height: 1px;
        background: ${commonColors.grayDivider};
      }
    }
  }
`;
