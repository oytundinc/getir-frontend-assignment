import styled from "styled-components";
import { Checkbox as AntCheckbox } from "antd";

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
