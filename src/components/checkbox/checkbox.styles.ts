import styled from "styled-components";
import { Checkbox as AntCheckbox } from "antd";
import { commonColors } from "../../common/theme/color";

export const CheckboxStyled = styled(AntCheckbox)`
  &.ant-checkbox-wrapper {
    padding: 6px !important;

    .ant-checkbox-inner {
      border: none;
      background: ${commonColors.white};
      box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
      border-radius: 2px;
    }
  }

  &.ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin: 0;
  }

  &.ant-checkbox-wrapper-checked {
    padding: 6px !important;

    .ant-checkbox-inner {
      border: none;
      background: ${commonColors.primary};
      box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
      border-radius: 2px;
    }
  }
`;
