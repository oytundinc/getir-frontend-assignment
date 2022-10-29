import React from "react";
import { ButtonProps as AntButtonProps } from "antd";
import { ButtonStyled } from "./button.styles";

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
