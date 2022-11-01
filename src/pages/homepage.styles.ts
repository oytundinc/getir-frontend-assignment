import styled from "styled-components";
import { commonColors } from "../common/theme/color";
import { fontSize, fontWeight } from "../common/theme/font";

export const HomePageWrapped = styled.div`
  .home-page-container {
    max-width: 1232px;
    width: 100%;
    margin: 38px auto !important;

    .ant-col-12 {
      .product-header {
        display: flex;
        align-items: center;

        font-weight: ${fontWeight.regular};
        font-size: ${fontSize.xxlarge};
        line-height: 26px;
        letter-spacing: 0.25px;
        color: ${commonColors.grayxDark};
      }

      .product-btn {
        display: flex;
        padding-bottom: 16px;
        .ant-btn {
          margin-right: 8px;

          .selected {
            background-color: red;
          }
        }
      }
      .ant-card-bordered {
        border: none;
      }

      .product-list {
        padding: 20px;
      }

      .ant-card {
        background: #ffffff;
        .ant-card-body {
          box-shadow: none;
          .ant-row {
            .ant-col-6 {
              .product-card-container {
                display: grid;
                align-items: center;
                .product-img {
                  padding: 16px;
                }
                .product-card-text-container {
                  .product-card-price {
                  }
                  .product-card-brand {
                  }
                  .product-card-tag {
                  }
                }
              }
            }
          }
        }
      }

      .ant-pagination {
        display: flex;
        justify-content: center;

        margin: 36px 0 136px 0;

        .ant-pagination-prev {
          display: flex;
          align-items: center;
          text-align: center;
          margin-right: 56px;

          font-weight: 600;
          font-size: 14px;
          line-height: 16px;
          color: #697488;
          &:hover {
            color: ${commonColors.primary};
          }
          .anticon-arrow-left {
            margin-right: 8px;
          }
        }

        .ant-pagination-item {
          border: none;
          background: none;

          a {
            font-weight: 600;
            font-size: 14px;
            color: #697488;
          }

          &:hover {
            a {
              color: #1ea4ce;
            }
          }
        }

        .ant-pagination-next {
          display: flex;
          align-items: center;
          text-align: center;
          margin-left: 56px;

          font-weight: 600;
          font-size: 14px;
          line-height: 16px;
          color: #697488;
          &:hover {
            color: ${commonColors.primary};
          }
          .anticon-arrow-right {
            margin-left: 8px;
          }
        }

        .ant-pagination-item-active {
          background: #1ea4ce;
          border-radius: 2px;
          a {
            color: #ffffff;
          }

          &:hover {
            a {
              color: #697488;
            }
          }
        }

        .ant-pagination-jump-prev,
        .ant-pagination-jump-next {
          span {
            color: #697488;
          }
        }
      }
    }

    .ant-col-6 {
      .item-counter-container {
        .count-btn {
          padding: 0px;
        }
      }

      .brands-container,
      .tags-container {
        padding-top: 24px;
      }
    }
  }
`;
