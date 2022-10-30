import { Meta } from "@storybook/react/types-6-0";
import TotalAmount, { TotalAmountProps } from "./total-amount";

export default {
  title: "components/total-amount",
  component: TotalAmount,
  argTypes: {
    totalbasketamount: {
      defaultValue: "Example Product",
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template = (props: TotalAmountProps) => (
  <TotalAmount totalbasketamount={10} />
);

export const Default = Template.bind({});
