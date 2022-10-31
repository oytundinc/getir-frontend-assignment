import React from "react";
import { HeaderLogo } from "../../components/header/header-logo";
import { HeaderStyled } from "./header.styles";
import basket from "../../assets/basket.png";
import TotalAmount from "../../components/total-amount/total-amount";

export interface HeaderTotalAmountProps {
  totalbasketamount?: number;
}
export const WrappedHeader = ({
  totalbasketamount,
}: HeaderTotalAmountProps) => {
  return (
    <HeaderStyled>
      <div className="header-container">
        <HeaderLogo />
        <div className="header-total-amount-container">
          <img src={basket} alt="basket" />
          <TotalAmount />
        </div>
      </div>
    </HeaderStyled>
  );
};

export const Header = React.memo(WrappedHeader);
