import { TotalAmountStyled } from "./total-amount.styles";

export interface TotalAmountProps {
  totalbasketamount: number;
}

const TotalAmount = ({ totalbasketamount }: TotalAmountProps) => {
  return (
    <TotalAmountStyled>
      <div className="total-amount-container">
        <span>₺</span>
        <span>{totalbasketamount}</span>
      </div>
    </TotalAmountStyled>
  );
};

export default TotalAmount;
