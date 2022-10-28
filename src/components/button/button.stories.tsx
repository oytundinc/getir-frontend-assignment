import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { Button, ButtonProps } from "./button";

export default {
  title: "components/button",
  component: Button,
  argTypes: {
    children: {
      defaultValue: "Button",
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template = (props: ButtonProps) => <Button>{props.children}</Button>;

export const Default = Template.bind({});
