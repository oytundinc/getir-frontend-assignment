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

  &.selected {
    background-color: #f2f0fd;
  }

  &:hover,
  &:active {
    color: ${commonColors.white};
    background-color: ${commonColors.secondary};
  }
`;
