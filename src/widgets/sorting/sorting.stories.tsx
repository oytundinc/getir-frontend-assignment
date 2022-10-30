import { Meta } from "@storybook/react/types-6-0";
import { Sorting } from "./sorting";

export default {
  title: "widgets/sorting",
  component: Sorting,
  argTypes: {},
} as Meta;

const Template = () => <Sorting />;

export const Default = Template.bind({});
