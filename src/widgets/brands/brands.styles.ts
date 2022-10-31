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
        display: flex;
        flex-direction: column;
        overflow: auto;
        
        height: 184px;
        padding: 16px;

        .brand-list {
          flex: 1;
          overflow: auto;

          .ant-checkbox-wrapper {
            display: flex;
          }
        }
      }
    }
  }
`;
