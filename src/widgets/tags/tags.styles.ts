import styled from "styled-components";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const TagsStyled = styled.div`
  .tags-container {
    .tags-header {
      display: flex;
      align-items: center;

      font-weight: ${fontWeight.semibold};
      font-size: ${fontSize.regular};
      line-height: 18px;
      color: ${commonColors.gray};
    }
    .ant-card {
      .ant-card-body {
        display: flex;
        flex-direction: column;
        
        height: 184px;
        padding: 16px;

        .brand-list {
          margin-top: 11px;
          overflow-y: scroll;
          height: 118px;
          
          .ant-checkbox-wrapper {
            display: flex;

            span {
              font-weight: 400;
              font-size: 14px;
              line-height: 18px;
              letter-spacing: 0.16px;
              color: #525252;
            }
          }
        }
      }
    }
  }
`;
