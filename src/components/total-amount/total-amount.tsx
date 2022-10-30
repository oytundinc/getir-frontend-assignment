import { CURRENCY_SYMBOL } from "../../common/constants/currency";
import { TotalAmountStyled } from "./total-amount.styles";

export interface TotalAmountProps {
  totalbasketamount: number;
}

const TotalAmount = ({ totalbasketamount }: TotalAmountProps) => {
  return (
    <TotalAmountStyled>
      <div className="total-amount-container">
        <span>{CURRENCY_SYMBOL.TRY}</span>
        <span>{totalbasketamount}</span>
      </div>
    </TotalAmountStyled>
  );
};

export default TotalAmount;
