import styled from "styled-components";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const TotalAmountStyled = styled.div`
  display: flex;
  justify-content: end;
  padding: 16px 16px 16px 0px;

  .total-amount-container {
    display: flex;
    border: 2px solid ${commonColors.primary};
    border-radius: 2px;

    padding: 17px 24px;

    font-size:  ${fontSize.medium};
    font-weight: ${fontWeight.semibold};
    color: ${commonColors.primary};
  }
`;
