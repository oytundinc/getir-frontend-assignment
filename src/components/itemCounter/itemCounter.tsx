import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { ButtonProps as AntButtonProps } from "antd";

const ItemCounterStyled = styled.div`
  .item-counter-container {
    .decrease-btn {
      border: none;
      color: #1ea4ce;
      background: #ffffff;
    }

    .decrease-btn {
      border: none;
      color: #1ea4ce;
      background: #ffffff;
    }

    .increase-btn {
      border: none;
      color: #1ea4ce;
      background: #ffffff;
    }

    .count-btn {
      width: 32px;
      height: 32px;
      background: #1ea4ce;
      border: none;

      font-family: "Open Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      text-align: center;

      color: #ffffff;
    }
  }
`;

type AllowedItemCounterTypes = "onClick";

export interface ItemCounterProps
  extends Pick<AntButtonProps, AllowedItemCounterTypes> {
  children?: string | number;
  className?: string;
  count?: number;
}

export const ItemCounter = () => {
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
  const random = () => {
    const newCount = Math.floor(Math.random() * 100);
    setCount(newCount);
  };

  return (
    <ItemCounterStyled>
      <div className="item-counter-container">
        <Button className="decrease-btn" onClick={decrease} icon>
          <MinusOutlined />
        </Button>
        <Button className="count-btn" onClick={random}>
          {count}
        </Button>
        <Button className="increase-btn" onClick={increase}>
          <PlusOutlined />
        </Button>
      </div>
    </ItemCounterStyled>
  );
};

export const ItemButton = React.memo(ItemCounter);
