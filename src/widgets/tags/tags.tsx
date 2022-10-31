import { useCallback, useState } from "react";
import { Card } from "../../components/card/card";
import Checkbox from "../../components/checkbox/checkbox";
import Input from "../../components/input/input";
import { TagsStyled } from "./tags.styles";
import { useSelector } from "react-redux";

export const WrappedTags = () => {
  const tags = useSelector((state: any) => state.filter.tags);
  const [searchKey, setSearchKey] = useState<string>("");

  const handleSearch = useCallback(
    (event: any) => {
      setSearchKey(event.target.value);
    },
    [setSearchKey]
  );
  return (
    <TagsStyled>
      <div className="tags-container">
        <h3 className="tags-header">Tags</h3>
        <Card>
          <div className="tags-card-container">
            <div className="tags-input">
              <Input placeholder="Search tag" onChange={handleSearch} />
            </div>
            <div className="tags-checkbox-btn">
              {tags
                .filter((tags: string) => {
                  return searchKey
                    ? !tags.search(new RegExp(searchKey.toLowerCase(), "i"))
                    : true;
                })
                .map((tags: string, index: number) => {
                  return (
                    <Checkbox key={`${tags}_${index}`} value={tags}>
                      {tags}
                    </Checkbox>
                  );
                })}
            </div>
          </div>
        </Card>
      </div>
    </TagsStyled>
  );
};

export const Tags = WrappedTags;
