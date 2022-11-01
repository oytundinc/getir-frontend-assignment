import styled from "styled-components";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const SortingStyled = styled.div`
  .sorting-container {
    .sorting-header {
      display: flex;
      align-items: center;

      font-weight: ${fontWeight.semibold};
      font-size: ${fontSize.regular};
      line-height: 18px;
      color: ${commonColors.gray};
    }
    .ant-card {
      .ant-card-body {

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
