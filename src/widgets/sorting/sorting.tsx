import { Radio, Space } from "antd";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card/card";
import RadioButton from "../../components/radio-button/radio-button";
import { ACTION_TYPES } from "../../store/action-types";
import { SORTING_TYPE } from "../../store/reducers/product.reducer";
import { SortingStyled } from "./sorting.styles";

export const WrappedSorting = () => {
  const dispatch = useDispatch();
  const sorting = useSelector(
    (state: any) => state.product.filterOptions.sorting
  );
  const handleChangeSorting = useCallback(
    (event: any) => {
      console.log(event.target.value);
      dispatch({
        type: ACTION_TYPES.SORTING_PRODUCTS,
        payload: event.target.value,
      });
    },
    [dispatch]
  );
  return (
    <SortingStyled>
      <div className="sorting-container">
        <h3 className="sorting-header">Sorting</h3>
        <Card>
          <div className="sorting-radio-btn">
            <Radio.Group onChange={handleChangeSorting} value={sorting}>
              <Space direction="vertical">
                <RadioButton
                  isChecked={sorting === SORTING_TYPE.PRICE_LOW2HIGH}
                  value={SORTING_TYPE.PRICE_LOW2HIGH}
                  radioButtonText={"Price low to high"}
                />
                <RadioButton
                  isChecked={sorting === SORTING_TYPE.PRICE_HIGH2LOW}
                  value={SORTING_TYPE.PRICE_HIGH2LOW}
                  radioButtonText={"Price high to low"}
                />
                <RadioButton
                  isChecked={sorting === SORTING_TYPE.NEW2OLD}
                  value={SORTING_TYPE.NEW2OLD}
                  radioButtonText={"New to old"}
                />
                <RadioButton
                  isChecked={sorting === SORTING_TYPE.OLD2NEW}
                  value={SORTING_TYPE.OLD2NEW}
                  radioButtonText={"Old to new"}
                />
              </Space>
            </Radio.Group>
          </div>
        </Card>
      </div>
    </SortingStyled>
  );
};

export const Sorting = WrappedSorting;
