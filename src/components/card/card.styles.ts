import styled from "styled-components";
import { Card } from "antd";
import { commonColors } from "../../common/theme/color";

export const CardStyled = styled(Card)`
  .ant-card-body {
    background: ${commonColors.white};
    box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
    border-radius: 2px;
  }
`;
