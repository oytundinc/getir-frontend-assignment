import { InputProps as AntInputProps } from "antd";
import { InputStyled } from "./input.styles";

export interface InputProps extends AntInputProps {
  placeholder: string;
}

export const Input = (props: InputProps) => {
  return <InputStyled {...props} />;
};

export default Input;
