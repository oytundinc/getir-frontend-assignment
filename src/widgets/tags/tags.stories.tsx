import { Meta } from "@storybook/react/types-6-0";
import { Tags } from "./tags";

export default {
  title: "widgets/tags",
  component: Tags,
  argTypes: {},
} as Meta;

const Template = () => <Tags />;

export const Default = Template.bind({});
