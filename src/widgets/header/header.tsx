import React from "react";
import { CURRENCY_SYMBOL } from "../../common/constants/currency";
import { HeaderLogo } from "../../components/header/header-logo";
import { HeaderStyled } from "./header.styles";
import basket from "../../assets/basket.png";

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
          <span>{CURRENCY_SYMBOL.TRY}</span>
          <span>{totalbasketamount}</span>
        </div>
      </div>
    </HeaderStyled>
  );
};

export const Header = React.memo(WrappedHeader);
