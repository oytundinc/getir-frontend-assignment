import { Card } from "../../components/card/card";
import Checkbox from "../../components/checkbox/checkbox";
import Input from "../../components/input/input";
import { BrandsStyled } from "./brands.styles";

export const WrappedBrands = () => {
  return (
    <BrandsStyled>
      <div className="brands-container">
        <h3 className="brands-header">Brands</h3>
        <Card>
          <div className="brands-card-container">
            <div className="brands-input">
              <Input placeholder="Search brand" />
            </div>
            <div className="brands-checkbox-btn">
              <Checkbox>Konopelski Group</Checkbox>
              <Checkbox>Konopelski Group</Checkbox>
              <Checkbox>Konopelski Group</Checkbox>
              <Checkbox>Konopelski Group</Checkbox>
              <Checkbox>Konopelski Group</Checkbox>
            </div>
          </div>
        </Card>
      </div>
    </BrandsStyled>
  );
};

export const Brands = WrappedBrands;
