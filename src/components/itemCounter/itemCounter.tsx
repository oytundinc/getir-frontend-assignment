import { useState } from "react";
import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { ButtonProps as AntButtonProps } from "antd";
import { ItemCounterStyled } from "./itemCounter.styles";


type AllowedItemCounterTypes = "onClick";

export interface ItemCounterProps
  extends Pick<AntButtonProps, AllowedItemCounterTypes> {
  children?: string | number;
  className?: string;
  count?: number;
}

export const WrappedItemCounter = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };

  return (
    <ItemCounterStyled>
      <div className="item-counter-container">
        <Button className="decrease-btn" onClick={decrease} icon>
          <MinusOutlined />
        </Button>
        <Button className="count-btn">
          {count}
        </Button>
        <Button className="increase-btn" onClick={increase}>
          <PlusOutlined />
        </Button>
      </div>
    </ItemCounterStyled>
  );
};

export const ItemCounter = WrappedItemCounter;
