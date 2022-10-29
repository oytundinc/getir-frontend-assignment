import { Meta } from "@storybook/react/types-6-0";
import { Header } from "./header";

export default {
  title: "widgets/header-logo",
  component: Header,
  argTypes: {},
} as Meta;

const Template = () => <Header></Header>;

export const Default = Template.bind({});
