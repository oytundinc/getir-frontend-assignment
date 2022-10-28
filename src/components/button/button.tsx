import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.div`
  button {
    font-weight: 600;
    font-size: 12px;
    
    color: #ffffff;
    border: none;
    border-radius: 2px;
    background-color: #1ea4ce;
  }
`;

export interface ButtonProps {
  children: string;
  className?: string;
}

const WrappedButton = ({ children, className }: ButtonProps) => {
  return (
    <ButtonStyled>
      <button className={className}>{children}</button>
    </ButtonStyled>
  );
};

export const Button = React.memo(WrappedButton);
