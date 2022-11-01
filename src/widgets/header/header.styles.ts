import styled from "styled-components";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const HeaderStyled = styled.div`
  .header-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${commonColors.primary};

    .header-logo {
      display: flex;
      margin: 18px 0;
    }

    .header-total-amount-container {
      display: flex;
      align-items: center;

      position: absolute;
      right: 0;
      margin-right: 146px;
      width: 129px;
      height: 76px;

      padding: 17px 24px;

      border: 2px solid ${commonColors.secondary};
      background-color: ${commonColors.secondary};
      border-radius: 2px;

      font-size: ${fontSize.medium};
      font-weight: ${fontWeight.semibold};
      color: ${commonColors.white};
      
      img {
        width: 24px;
        height: 24px;
      }
      .total-amount-container {
        padding: 0 0 0 8px;;
        border: none;
      }
      span {
        font-size: ${fontSize.medium};
        font-weight: ${fontWeight.semibold};
        line-height: 18px;
        letter-spacing: 0.16px;
        color: ${commonColors.white};
        border: none;
      }
    }
  }
`;
