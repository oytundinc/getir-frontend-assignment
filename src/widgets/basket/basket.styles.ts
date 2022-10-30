import styled from "styled-components";

export const BasketStyled = styled.div`
  .basket-container {
    background: #1ea4ce;
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
        background: #f4f4f4;
      }
    }
  }
`;
