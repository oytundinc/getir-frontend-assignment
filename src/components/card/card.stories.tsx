import { Meta } from '@storybook/react';
import { Card, CardProps } from "./card";

export default {
    title: 'components/card',
    component: Card,
    argTypes: {
        extra: {
            defaultValue: '',
            control: {
                type: 'text',
            },
        },
    },
} as Meta;

export const Default = (props: CardProps) => <Card {...props} />;
