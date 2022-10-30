import { Meta } from "@storybook/react/types-6-0";
import { Brands } from "./brands";

export default {
  title: "widgets/brands",
  component: Brands,
  argTypes: {},
} as Meta;

const Template = () => <Brands />;

export const Default = Template.bind({});
