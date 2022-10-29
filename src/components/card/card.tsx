import { CardProps as AntCardProps } from 'antd';

import React from 'react';
import { CardStyled } from './card.styles';

export interface CardProps extends Pick<AntCardProps, 'title' | 'className'> {
    title?: string;
    children: JSX.Element;
    extra?: JSX.Element;
}

const WrappedCard = ({ title, extra, ...props }: CardProps) => {
    const extraProps: Pick<AntCardProps, 'title' | 'className'> = {};

    extraProps.className = `${props.className}`;

    return (
        <CardStyled
            title={title}
            {...props}
            extra={extra}
            {...extraProps}
        >
            {props.children}
        </CardStyled>
    );
};

export const Card = React.memo(WrappedCard);
