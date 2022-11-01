import { useCallback, useEffect } from "react";
import { api } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../store/action-types";
import { Col, Pagination, PaginationProps, Row } from "antd";
import { ProductCard } from "../components/product-card/product-card";
import { Sorting } from "../widgets/sorting/sorting";
import { Brands } from "../widgets/brands/brands";
import { Tags } from "../widgets/tags/tags";
import { Basket } from "../widgets/basket/basket";
import { HomePageWrapped } from "./homepage.styles";
import { Card } from "../components/card/card";
import { Button } from "../components/button/button";
import { CategoryType } from "../store/reducers/filter.reducer";
import { useImmer } from "use-immer";
import ArrowLeftOutlined from "@ant-design/icons/lib/icons/ArrowLeftOutlined";
import ArrowRightOutlined from "@ant-design/icons/lib/icons/ArrowRightOutlined";

export const HomePage = () => {
  const dispatch = useDispatch();
  const {
    filteredList: products,
    categories,
    selectedCategory,
  } = useSelector((state: any) => state.product);

  const filterOptions = useSelector(
    (state: any) => state.product.filterOptions
  );

  const [pagination, setPagination] = useImmer<{ page: number; limit: number }>(
    {
      page: 1,
      limit: 16,
    }
  );

  const fetchInitialData = useCallback(async () => {
    const companiesResponse = await api.getCompanies();
    const productsResponse = await api.getProducts();
    dispatch({
      type: ACTION_TYPES.SET_ALL_OF_COMPANIES,
      payload: companiesResponse.data,
    });

    dispatch({
      type: ACTION_TYPES.SET_ALL_OF_PRODUCTS,
      payload: productsResponse.data,
    });
  }, [dispatch]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  const handleChangePagination = useCallback(
    (value: number) => {
      setPagination((draft) => {
        draft.page = value;
      });
    },
    [setPagination]
  );

  const handleSelectCategory = useCallback(
    (item: string) => {
      dispatch({
        type: ACTION_TYPES.SELECT_CATEGORY,
        payload: item,
      });
    },
    [dispatch]
  );

  const resetPagination = useCallback(() => {
    setPagination((draft) => {
      draft.page = 1;
    });
  }, [setPagination]);

  useEffect(() => {
    resetPagination();
  }, [filterOptions.brands, filterOptions.tags, resetPagination]);

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return (
        <span>
          <ArrowLeftOutlined />
          Previous
        </span>
      );
    }
    if (type === "next") {
      return (
        <span>
          Next
          <ArrowRightOutlined />
        </span>
      );
    }
    return originalElement;
  };

  console.log("selectedCategory", selectedCategory);
  return (
    <HomePageWrapped>
      <Row gutter={16} className="home-page-container">
        <Col span={6}>
          <Sorting />
          <Brands />
          <Tags />
        </Col>
        <Col span={12}>
          <h2 className="product-header">Products</h2>
          <div className="product-btn">
            {categories.map((item: CategoryType) => {
              return (
                <Button
                  onClick={() => handleSelectCategory(item)}
                  type="primary"
                  className={item === selectedCategory ? "selected" : ""}
                  key={item}
                >
                  {item}
                </Button>
              );
            })}
          </div>
          <Card className="product-list">
            <Row gutter={8}>
              {products
                .slice(
                  pagination.limit * (pagination.page - 1),
                  pagination.limit * pagination.page
                )
                .map((product: any) => {
                  return (
                    <Col key={product.added} span={6}>
                      <ProductCard
                        productId={product.added}
                        productPrice={product.price}
                        productName={product.name}
                        productBrand={product.manufacturer}
                        productTags={product.tags}
                      />
                    </Col>
                  );
                })}
            </Row>
          </Card>
          <Pagination
            current={pagination.page}
            total={products.length}
            pageSize={16}
            showSizeChanger={false}
            onChange={handleChangePagination}
            itemRender={itemRender}
          />
        </Col>
        <Col span={6}>
          <Basket />
        </Col>
      </Row>
    </HomePageWrapped>
  );
};
