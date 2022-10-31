import styled from "styled-components";
import { Radio as AntRadio } from "antd";
import { commonColors } from "../../common/theme/color";

export const RadioButtonStyled = styled(AntRadio)`
  .ant-radio-inner {
    &:after {
      display: none;
    }
  }
  .icon-check {
    position: absolute;
    left: 2px;

    .anticon-check {
      color: ${commonColors.primary}
    }
  }
`;
