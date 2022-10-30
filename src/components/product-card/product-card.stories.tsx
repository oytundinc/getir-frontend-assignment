import { Meta } from "@storybook/react/types-6-0";
import { ProductCard, ProductCardProps } from "./product-card";

export default {
  title: "components/product-card",
  component: ProductCard,
  argTypes: {
    productName: {
      defaultValue: "Example Product",
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template = (props: ProductCardProps) => <ProductCard productPrice={0} productBrand={"Gorgeous Office "} productTag={"Mug"} />;

export const Default = Template.bind({});
