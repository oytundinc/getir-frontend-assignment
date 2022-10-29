import styled from "styled-components";
import { Radio as AntRadio } from "antd";

export const RadioButtonStyled = styled(AntRadio)`
  display: flex;
  align-items: center;

  position: relative;

  box-sizing: border-box;
  cursor: pointer;
  .ant-radio {
    display: inline-block;
    margin-right: 5px;
    margin-top: -6px;

    position: relative;

    outline: none;
    cursor: pointer;
    input {
      padding: 0;

      position: absolute;
      top: 2px;
      right: 0;
      bottom: 0;
      left: 2px;

      box-sizing: border-box;
      touch-action: manipulation;
      cursor: pointer;
      overflow: visible;

      z-index: 1;
      opacity: 0;
    }
    span {
      &.ant-radio-inner {
        display: block;
        width: 22px;
        height: 22px;

        position: relative;
        top: 1px;
        left: 2px;

        border: 2px solid #1ea4ce;
        border-radius: 17.5px;
        background-color: #ffffff;

        &:after {
          content: "";

          display: inline-block;
          width: 5px;
          height: 10px;

          position: absolute;
          top: 3px;
          left: 8px;
          z-index: 99;

          opacity: 0;
          transform: rotate(45deg);

          border-bottom: 1px solid #1ea4ce;
          border-right: 1px solid #1ea4ce;
        }
      }
    }
    &.ant-radio-checked {
      .ant-radio-inner {
        &:after {
          opacity: 1;
        }
      }
    }
  }
  &.ant-radio-wrapper-disabled {
    cursor: not-allowed;
    span {
      opacity: 0.6;
    }
  }
  span {
    &:not(.ant-radio-inner) {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      display: flex;
      align-items: center;
      letter-spacing: 0.16px;

      color: #525252 !important;

      padding-left: 10px;
    }
  }
`;
