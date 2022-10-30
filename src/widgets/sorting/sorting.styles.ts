import styled from "styled-components";

export const SortingStyled = styled.div`
  .sorting-container {
    .sorting-header {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;

      display: flex;
      align-items: center;

      color: #697488;
    }
    .ant-card {
      .ant-card-body {
        width: 296px;
        height: 184px;

        .sorting-radio-btn {
          padding: 24px;
          .ant-radio-wrapper {
            padding-top: 16px;
            &:first-child {
              padding-top: 0px;
            }
          }
        }
      }
    }
  }
`;
