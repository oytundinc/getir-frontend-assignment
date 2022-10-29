import styled from "styled-components";
import { Button as AntButton } from "antd";

export const ButtonStyled = styled(AntButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  font-size: 12px;
  font-weight: 600;
  height: 36px;
  color: #ffffff;

  padding: 0px 16px;
  text-align: center;

  background-color: #1ea4ce;
  border: none;
  border-radius: 2px;
`;