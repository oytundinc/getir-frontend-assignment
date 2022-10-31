import styled from "styled-components";
import { Checkbox as AntCheckbox } from "antd";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const CheckboxStyled = styled(AntCheckbox)`
  display: inline-flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;

  .ant-checkbox {
    padding: 0 !important;
    display: inline-block;
    position: relative;
    top: 0;

    outline: none;
    cursor: pointer;
    input {
      position: absolute;
      top: 2px;
      right: 0;
      bottom: 0;
      left: 2px;
      z-index: 1;

      padding: 0;
      opacity: 0;

      cursor: pointer;
      touch-action: manipulation;

      box-sizing: border-box;
      overflow: visible;
    }
    span {
      &.ant-checkbox-inner {
        display: block;
        width: 24px;
        height: 24px;

        position: relative;
        top: 0;
        left: 0;

        border: none;

        background: ${commonColors.white};
        box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
        border-radius: 2px;
        &:after {
          content: "";

          display: inline-block;
          width: 7px;
          height: 13px;

          position: absolute;
          top: 2px;
          left: 7px;
          z-index: 99;

          opacity: 0;
          transform: rotate(45deg);

          border-bottom: 2px solid ${commonColors.white};
          border-right: 2px solid ${commonColors.white};
        }
      }
    }
    &.ant-checkbox-checked {
      .ant-checkbox-inner {
        background-color: ${commonColors.primary};
        border-color: ${commonColors.primary};
        &:after {
          opacity: 1;
        }
      }
    }
  }
  span {
    &:not(.ant-checkbox-inner) {
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
