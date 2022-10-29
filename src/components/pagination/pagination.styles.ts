import styled from "styled-components";
import { Pagination } from "antd";

export const PaginationPageStyled = styled(Pagination)`
  display: flex;
  align-items: center;
  .ant-pagination-options {
    display: none;
  }

  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    display: inline-flex;
  }

  .ant-pagination-next,
  .ant-pagination-prev {
    display: inline-flex;
    .ant-pagination-item-link {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }

  .ant-pagination-item-link,
  .ant-pagination-next,
  .ant-pagination-prev,
  .ant-pagination-item {
    margin: 10px;
    background: transparent;
    border-radius: 2px;
    border-color: transparent;

    &::marker {
      display: none;
    }
    a {
      color: #697488 !important;
    }

    &:hover {
      a {
        color: #1ea4ce !important;
      }
    }

    &.ant-pagination-item-active {
      border-radius: 4px;
      background-color: #1ea4ce;
      color: red !important;
      border-color: #1ea4ce;

      a {
        color: #ffffff !important;
      }
    }

    .anticon-left,
    .anticon-right {
      svg {
        fill: #1ea4ce;
      }
    }
  }

`;