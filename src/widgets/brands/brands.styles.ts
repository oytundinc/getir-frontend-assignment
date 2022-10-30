import styled from "styled-components";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const BrandsStyled = styled.div`
  .brands-container {
    .brands-header {
      display: flex;
      align-items: center;

      font-weight: ${fontWeight.semibold};
      font-size: ${fontSize.regular};
      line-height: 18px;
      color: ${commonColors.gray};
    }
    .ant-card {
      .ant-card-body {
        width: 296px;
        height: 184px;

        .brands-card-container {
          padding: 24px;

          .brands-checkbox-btn {
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
