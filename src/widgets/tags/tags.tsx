import { useCallback, useState } from "react";
import { Card } from "../../components/card/card";
import Checkbox from "../../components/checkbox/checkbox";
import Input from "../../components/input/input";
import { TagsStyled } from "./tags.styles";
import { useDispatch, useSelector } from "react-redux";
import { TagType } from "../../store/reducers/filter.reducer";
import { ACTION_TYPES } from "../../store/action-types";
import _ from "lodash";

export const WrappedTags = () => {
  const tags = useSelector((state: any) => state.filter.tags);
  const companies = useSelector((state: any) => state.filter.companies);
  const dispatch = useDispatch();
  const tagsFilterList = useSelector(
    (state: any) => state.product.filterOptions.tags
  );

  const [searchKey, setSearchKey] = useState<string>("");

  const handleSearch = useCallback(
    (event: any) => {
      setSearchKey(event.target.value);
    },
    [setSearchKey]
  );

  const handleFilterByTag = useCallback(
    (event: any) => {
      console.log(event.target.value);
      const filterArr = [...tagsFilterList];
      if (!filterArr.includes(event.target.value)) {
        filterArr.push(event.target.value as TagType);
      } else {
        _.remove(filterArr, function (tagItem) {
          return tagItem === event.target.value;
        });
        console.log(filterArr);
      }
      dispatch({
        type: ACTION_TYPES.FILTER_PRODUCTS_BY_TAG,
        payload: filterArr,
      });
    },
    [dispatch, tagsFilterList]
  );

  const handleSelectAllTag = useCallback(
    (event: any) => {
      if (event.target.checked) {
        dispatch({
          type: ACTION_TYPES.FILTER_PRODUCTS_BY_TAG,
          payload: [],
        });
      }
    },
    [dispatch]
  );

  return (
    <TagsStyled>
      <div className="tags-container">
        <h3 className="tags-header">Tags</h3>
        <Card>
          <div className="tags-card-container">
            <div className="search-bar">
              <Input placeholder="Search tag" onChange={handleSearch} />
            </div>
            <div className="brand-list">
              <Checkbox
                value="all"
                onChange={handleSelectAllTag}
                checked={tagsFilterList.length === 0}
              >
                All
              </Checkbox>
              {tags
                .filter((tags: string) => {
                  return searchKey
                    ? !tags.search(new RegExp(searchKey.toLowerCase(), "i"))
                    : true;
                })
                .map((tags: string, index: number) => {
                  return (
                    <Checkbox
                      key={`${tags}_${index}`}
                      value={tags}
                      onChange={handleFilterByTag}
                      checked={tagsFilterList.includes(tags)}
                    >
                      {companies[tags] ? companies[tags].name : tags}
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
