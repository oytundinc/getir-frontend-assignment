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
    left: 3px;
    bottom: 1px;
    .anticon-check {
      color: ${commonColors.primary};
      font-size: 10px !important;
    }
  }
  .text-container {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    align-items: center;
    letter-spacing: 0.16px;
    color: #525252;
  }

  .ant-radio-checked {
    .ant-radio-inner {
      border-color: ${commonColors.primary};
      box-shadow: 0 0 0 1px ${commonColors.primary};
      &:after {
        display: none;
      }
    }
  }
`;
