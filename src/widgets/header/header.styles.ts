import styled from "styled-components";
import { commonColors } from "../../common/theme/color";

export const HeaderStyled = styled.div`
  .header-container {
    display: flex;

    background-color: ${commonColors.primary};

    .header-logo {
      display: flex;
      margin: 18px auto;
    }
  }
`;
