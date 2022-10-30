import { Card } from "../../components/card/card";
import Checkbox from "../../components/checkbox/checkbox";
import Input from "../../components/input/input";
import { TagsStyled } from "./tags.styles";

export const WrappedTags = () => {
  return (
    <TagsStyled>
      <div className="tags-container">
        <h3 className="tags-header">Tags</h3>
        <Card>
          <div className="tags-card-container">
            <div className="tags-input">
              <Input placeholder="Search tag" />
            </div>
            <div className="tags-checkbox-btn">
              <Checkbox>People</Checkbox>
              <Checkbox>People</Checkbox>
              <Checkbox>People</Checkbox>
              <Checkbox>People</Checkbox>
              <Checkbox>People</Checkbox>
            </div>
          </div>
        </Card>
      </div>
    </TagsStyled>
  );
};

export const Tags = WrappedTags;
