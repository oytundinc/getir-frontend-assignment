import { Meta } from "@storybook/react/types-6-0";
import { Header, HeaderTotalAmountProps } from "./header";

export default {
  title: "widgets/header",
  component: Header,
  argTypes: {},
} as Meta;

const Template = (props: HeaderTotalAmountProps) => (
  <Header totalbasketamount={(34.45)}></Header>
);

export const Default = Template.bind({});
