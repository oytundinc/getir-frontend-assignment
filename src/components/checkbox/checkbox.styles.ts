import styled from "styled-components";
import { Checkbox as AntCheckbox } from "antd";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const CheckboxStyled = styled(AntCheckbox)`
  .ant-checkbox-inner {
    background-color: red;
    border-color: red;
  }
  &.ant-checkbox-wrapper {
    padding: 6px !important;
  }
  &.ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin: 0;
  }
`;
