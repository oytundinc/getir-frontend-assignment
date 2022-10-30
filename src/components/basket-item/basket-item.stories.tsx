import { Meta } from "@storybook/react/types-6-0";
import { CURRENCY_SYMBOL } from "../../common/constants/currency";
import { BasketItem, BasketItemProps } from "./basket-item";

export default {
  title: "components/basket-item",
  component: BasketItem,
  argTypes: {
    productName: {
      defaultValue: "Example Product",
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template = (props: BasketItemProps) => (
  <BasketItem
    productName={"Example Product"}
    productPriceCurrency={CURRENCY_SYMBOL.TRY}
    productPrice={10}
  />
);

export const Default = Template.bind({});
