import { Card } from "../../components/card/card";
import RadioButton from "../../components/radio-button/radio-button";
import { SortingStyled } from "./sorting.styles";

export const WrappedSorting = () => {
  return (
    <SortingStyled>
      <div className="sorting-container">
        <h3 className="sorting-header">Sorting</h3>
        <Card>
          <div className="sorting-radio-btn">
            <RadioButton radioButtonText={"Price low to high"} />
            <RadioButton radioButtonText={"Price low to low"} />
            <RadioButton radioButtonText={"New to old"} />
            <RadioButton radioButtonText={"Old to new"} />
          </div>
        </Card>
      </div>
    </SortingStyled>
  );
};

export const Sorting = WrappedSorting;
