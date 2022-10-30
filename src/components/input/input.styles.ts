import styled from "styled-components";
import { Input as AntInput } from "antd";
import { fontSize, fontWeight } from "../../common/theme/font";
import { commonColors } from "../../common/theme/color";

export const InputStyled = styled(AntInput)`
border: 2px solid #${commonColors.grayMedium};
border-radius: 2px;

font-weight: ${fontWeight.regular};
font-size: ${fontSize.medium};
line-height: 24px;
letter-spacing: 0.15px;
color: ${commonColors.grayLight};

&::placeholder {
  padding: 12px 141px 12px 16px;
  color: ${commonColors.grayMedium};
  font-size: ${fontSize.medium};
}

&:active,
&:focus,
&:hover {
  border: 2px solid ${commonColors.primary};
  outline: none;
}
`;