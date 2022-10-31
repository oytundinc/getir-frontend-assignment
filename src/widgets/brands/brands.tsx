import { Card } from "../../components/card/card";
import Checkbox from "../../components/checkbox/checkbox";
import Input from "../../components/input/input";
import { BrandsStyled } from "./brands.styles";
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";

export const WrappedBrands = () => {
  const { brands } = useSelector((state: any) => state.global);
  const [searchKey, setSearchKey] = useState<string>("");

  const handleSearch = useCallback(
    (event: any) => {
      setSearchKey(event.target.value);
    },
    [setSearchKey]
  );

  return (
    <BrandsStyled>
      <div className="brands-container">
        <h3 className="brands-header">Brands</h3>
        <Card>
          <div className="brands-card-container">
            <div className="brands-input">
              <Input placeholder="Search brand" onChange={handleSearch} />
            </div>
            <div className="brands-checkbox-btn">
              {brands
                .filter((brand: string) => {
                  return searchKey
                    ? !brand.search(new RegExp(searchKey.toLowerCase(), "i"))
                    : true;
                })
                .map((brand: string, index: number) => {
                  return (
                    <Checkbox key={`${brand}_${index}`} value={brand}>
                      {brand}
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
