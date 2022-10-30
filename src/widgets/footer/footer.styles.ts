import styled from "styled-components";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const FooterStyled = styled.div`
  .footer-container {
    width: 100%;
    margin-top: 100px;
    margin-bottom: 40px;
    text-align: center;

    background-color: unset;

    span {
      font-weight: ${fontWeight.regular};
      font-size: ${fontSize.regular};
      line-height: 174%;

      color: ${commonColors.primary};
    }

    .second-text {
      padding: 0 16px;
    }
  }
`;
