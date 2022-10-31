import styled from "styled-components";
import { Radio as AntRadio } from "antd";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

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

        border: 2px solid ${commonColors.primary};
        border-radius: 17.5px;
        background-color: ${commonColors.white};

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

          border-bottom: 1px solid ${commonColors.primary};
          border-right: 1px solid ${commonColors.primary};
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
      display: flex;
      align-items: center;


      font-weight: ${fontWeight.regular};
      font-size: ${fontSize.medium};
      line-height: 18px;
      letter-spacing: 0.16px;
      color: ${commonColors.grayDark} !important;
    }
  }
`;
