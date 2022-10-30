import { CardProps as AntCardProps } from "antd";
import React from "react";
import { CardStyled } from "./card.styles";

export interface CardProps extends Pick<AntCardProps, "title" | "className"> {
  children: JSX.Element;
  extra?: JSX.Element;
}

const WrappedCard = ({ title, extra, className, children }: CardProps) => {
  return (
    <CardStyled title={title} extra={extra} className={className}>
      {children}
    </CardStyled>
  );
};

export const Card = React.memo(WrappedCard);
