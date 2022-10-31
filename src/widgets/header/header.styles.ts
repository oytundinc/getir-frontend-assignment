import styled from "styled-components";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const HeaderStyled = styled.div`
  .header-container {
    display: flex;

    background-color: ${commonColors.primary};

    .header-logo {
      display: flex;
      margin: 18px 414px 18px 651px;
    }

    .header-total-amount-container {
      width: 129px;
      height: 76px;

      padding: 17px 24px;

      border: 2px solid ${commonColors.secondary};
      background-color: ${commonColors.secondary};
      border-radius: 2px;

      font-size: ${fontSize.medium};
      font-weight: ${fontWeight.semibold};
      color: ${commonColors.white};

      span {
        font-size: ${fontSize.medium};
        font-weight: ${fontWeight.semibold};
        line-height: 18px;
        letter-spacing: 0.16px;
        color: ${commonColors.white};
      }
    }
  }
`;
