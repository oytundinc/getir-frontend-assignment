import styled from "styled-components";

export const TagsStyled = styled.div`
  .tags-container {
    .tags-header {
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
        .tags-card-container {
          padding: 24px;

          .tags-input {
          }

          .tags-checkbox-btn {
            display: grid;
            
            padding-top: 17px;
            padding-bottom: 13px;
            .ant-checkbox-wrapper {
              padding-top: 18px;
              &:first-child {
                padding-top: 0px;
              }
            }
          }
        }
      }
    }
  }
`;
