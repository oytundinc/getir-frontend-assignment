import { Meta } from "@storybook/react/types-6-0";
import { Basket } from "./basket";

export default {
  title: "widgets/basket",
  component: Basket,
  argTypes: {},
} as Meta;

const Template = () => <Basket />;

export const Default = Template.bind({});
