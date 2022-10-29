import { Meta } from "@storybook/react/types-6-0";
import RadioButton, { RadioButtonProps } from "./radio-button";

export default {
  title: "components/radio-button",
  component: RadioButton,
  argTypes: {
    radioButtonText: {
      defaultValue: "Price low to high",
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template = (props: RadioButtonProps) => (
  <RadioButton {...props}>{props.radioButtonText}</RadioButton>
);

export const Default = Template.bind({});
