import { Meta } from "@storybook/react/types-6-0";
import { ItemCounter, ItemCounterProps } from "./itemCounter";

export default {
  title: "components/itemCounter",
  component: ItemCounter,
  argTypes: {
    children: {
      defaultValue: "",

    },
  },
} as Meta;

const Template = (props: ItemCounterProps) => <ItemCounter />;

export const Default = Template.bind({});
