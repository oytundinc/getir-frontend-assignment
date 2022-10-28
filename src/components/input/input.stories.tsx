import { Meta } from "@storybook/react";
import { Input, InputProps } from "./input";

export default {
  title: "components/input",
  component: Input,
  argTypes: {
    value: {
      defaultValue: "",
      control: {
        type: "text",
      },
    },
    placeholder: {
      defaultValue: "Input Placeholder",
      control: {
        type: "text",
      },
    },
  },
} as Meta;

export const Template = ({  ...props }: InputProps) => {

  return (
    <Input
      {...props}
    />
  );
};
