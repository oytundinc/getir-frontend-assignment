import styled from "styled-components";
import { Input as AntInput } from "antd";

export const InputStyled = styled(AntInput)`
border: 2px solid #e0e0e0;
border-radius: 2px;

font-family: "Inter";
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;

letter-spacing: 0.15px;

color: #a8a8a8;

&::placeholder {
  padding: 12px 141px 12px 16px;
  font-family: "Inter";
  color: #e0e0e0;
  font-size: 14px;
}

&:active,
&:focus,
&:hover {
  border: 2px solid #1ea4ce;
  outline: none;
}
`;