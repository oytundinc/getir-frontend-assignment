import { Meta } from "@storybook/react/types-6-0";
import { Footer } from "./footer";

export default {
  title: "widgets/footer",
  component: Footer,
  argTypes: {},
} as Meta;

const Template = () => <Footer/>;

export const Default = Template.bind({});
