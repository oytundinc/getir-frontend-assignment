import { Meta } from "@storybook/react/types-6-0";
import { HeaderLogo } from "./header-logo";

export default {
  title: "components/header-logo",
  component: HeaderLogo,
  argTypes: {},
} as Meta;

const Template = () => <HeaderLogo></HeaderLogo>;

export const Default = Template.bind({});
