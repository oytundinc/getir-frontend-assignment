import React from "react";
import { ButtonProps as AntButtonProps } from "antd";
import { ButtonStyled } from "./button.styles";

export interface ButtonProps extends AntButtonProps {
  children: string;
  className?: string;
}

const WrappedButton = ({ children, ...restProps }: ButtonProps) => {
  return <ButtonStyled {...restProps}>{children}</ButtonStyled>;
};

export const Button = React.memo(WrappedButton);
