import { Card } from "../../components/card/card";
import Checkbox from "../../components/checkbox/checkbox";
import Input from "../../components/input/input";
import { BrandsStyled } from "./brands.styles";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import _ from "lodash";
import { BrandType } from "../../store/reducers/filter.reducer";
import { ACTION_TYPES } from "../../store/action-types";

export const WrappedBrands = () => {
  const brands = useSelector((state: any) => state.filter.brands);
  const companies = useSelector((state: any) => state.filter.companies);
  const dispatch = useDispatch();
  const brandsFilterList = useSelector(
    (state: any) => state.product.filterOptions.brands
  );
  const [searchKey, setSearchKey] = useState<string>("");

  const handleSearch = useCallback(
    (event: any) => {
      setSearchKey(event.target.value);
    },
    [setSearchKey]
  );

  const handleFilterByBrand = useCallback(
    (event: any) => {
      console.log(event.target.value);
      const filterArr = [...brandsFilterList];
      if (!filterArr.includes(event.target.value)) {
        filterArr.push(event.target.value as BrandType);
      } else {
        _.remove(filterArr, function (brandItem) {
          return brandItem === event.target.value;
        });
        console.log(filterArr);
      }
      dispatch({
        type: ACTION_TYPES.FILTER_PRODUCTS_BY_BRAND,
        payload: filterArr,
      });
    },
    [brandsFilterList, dispatch]
  );

  const handleSelectAllBrand = useCallback(
    (event: any) => {
      if (event.target.checked) {
        dispatch({
          type: ACTION_TYPES.FILTER_PRODUCTS_BY_BRAND,
          payload: [],
        });
      }
    },
    [dispatch]
  );

  return (
    <BrandsStyled>
      <div className="brands-container">
        <h3 className="brands-header">Brands</h3>
        <Card>
          <div className="brands-card-container">
            <div className="search-bar">
              <Input placeholder="Search brand" onChange={handleSearch} />
            </div>
            <div className="brand-list">
              <Checkbox
                value="all"
                onChange={handleSelectAllBrand}
                checked={brandsFilterList.length === 0}
              >
                All
              </Checkbox>
              {brands
                .filter((brand: string) => {
                  return searchKey
                    ? !brand.search(new RegExp(searchKey.toLowerCase(), "i"))
                    : true;
                })
                .map((brand: string, index: number) => {
                  return (
                    <Checkbox
                      key={`${brand}_${index}`}
                      value={brand}
                      onChange={handleFilterByBrand}
                      checked={brandsFilterList.includes(brand)}
                    >
                      {companies[brand] ? companies[brand].name : brand}
                    </Checkbox>
                  );
                })}
            </div>
          </div>
        </Card>
      </div>
    </BrandsStyled>
  );
};

export const Brands = WrappedBrands;
