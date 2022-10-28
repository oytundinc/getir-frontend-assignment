import React from "react";
import styled from "styled-components";
import { Button as AntButton } from "antd";
import { ButtonProps as AntButtonProps } from "antd";

const ButtonStyled = styled(AntButton)`
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

type AllowedAntButtonTypes = "onClick";

export interface ButtonProps
  extends Pick<AntButtonProps, AllowedAntButtonTypes> {
  children: string;
  className?: string;
}

const WrappedButton = ({ children }: ButtonProps) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export const Button = React.memo(WrappedButton);
