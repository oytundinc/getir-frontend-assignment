import { useCallback, useEffect } from "react";
import { api } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../store/action-types";
import { Col, Row } from "antd";
import { ProductCard } from "../components/product-card/product-card";
import { Sorting } from "../widgets/sorting/sorting";
import { Brands } from "../widgets/brands/brands";
import { Tags } from "../widgets/tags/tags";
import { Basket } from "../widgets/basket/basket";
import { HomePageWrapped } from "./homepage.styles";
import { Card } from "../components/card/card";
import { Button } from "../components/button/button";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { /* companies */ products } = useSelector((state: any) => state.global);

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

  console.log(global);
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
            <Button>mug</Button>
            <Button>shirt</Button>
          </div>
          <Card>
            <Row gutter={16}>
              {products.map((product: any) => {
                return (
                  <Col key={product.added} span={6}>
                    <ProductCard
                      productPrice={product.price}
                      productBrand={product.manufacturer}
                      productTags={product.tags}
                    />
                  </Col>
                );
              })}
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <Basket />
        </Col>
      </Row>
    </HomePageWrapped>
  );
};
