import styled from "styled-components";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const ItemCounterStyled = styled.div`
  .item-counter-container {
    .decrease-btn,
    .increase-btn {
      border: none;
      color: ${commonColors.primary};
      background: ${commonColors.white};
    }
    .decrease-btn {
      padding: 0px 11px 0px 0px;
    }

    .increase-btn {
      padding: 0px 0px 0px 11px;
    }
    .count-btn {
      width: 32px;
      height: 32px;
      background: ${commonColors.primary};
      border: none;

      font-weight: ${fontWeight.bold};
      font-size: ${fontSize.medium};
      line-height: 20px;
      text-align: center;
      color: ${commonColors.white};
    }
  }
`;
