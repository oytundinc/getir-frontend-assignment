import styled from "styled-components";
import { Button as AntButton } from "antd";
import { commonColors } from "../../common/theme/color";
import { fontSize, fontWeight } from "../../common/theme/font";

export const ButtonStyled = styled(AntButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0px 16px;

  font-size: ${fontSize.small};
  font-weight: ${fontWeight.semibold};
  color: ${commonColors.white};

  text-align: center;

  background-color: ${commonColors.primary};
  border: none;
  border-radius: 2px;

  &.ant-btn-primary {
    color: ${commonColors.primary};
    background: #f2f0fd;

    &:hover {
      background: ${commonColors.secondary};
    }

    &.selected {
      color: ${commonColors.white};
      background: ${commonColors.primary};
    }
  }

  &:hover {
    color: ${commonColors.white};
    background-color: ${commonColors.secondary};
  }

  &:focus {
    background: #f2f0fd;
    color: ${commonColors.primary};
  }
`;
