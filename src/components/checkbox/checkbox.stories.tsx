import { Meta } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from "./checkbox";

export default {
    title: 'components/checkbox',
    component: Checkbox,
    argTypes: {
        children: {
            defaultValue: 'Checkbox',
            control: {
                type: 'text',
            },
        },
        disabled: {
            defaultValue: false,
            control: {
                type: 'boolean',
            },
        },
        indeterminate: {
            defaultValue: false,
            control: {
                type: 'boolean',
            },
        },
    },
} as Meta;

const Template = (props: CheckboxProps) => (
    <Checkbox {...props}>{props.children}</Checkbox>
);

export const Default = Template.bind({});
