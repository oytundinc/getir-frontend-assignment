import styled from "styled-components";
import { commonColors } from "../../common/theme/color";

export const BasketStyled = styled.div`
  .basket-container {
    background: ${commonColors.primary};

    border-radius: 2px;

    .ant-card {
      padding: 8px;

      .ant-card-body {
        padding: 0px 22px;

        .basket-product-list {
          display: flex;
          padding-bottom: 18px;
          padding-top: 18px;

          .item-counter-container {
            padding-left: 43px;
          }
        }
      }
      .ant-divider {
        height: 1px;
        background: ${commonColors.grayDivider};
      }
    }
  }
`;
