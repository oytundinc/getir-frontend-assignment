import { CheckboxStyled } from "./checkbox.styles";

export interface CheckboxProps {
  children: string;
}

export const Checkbox = ({ children }: CheckboxProps) => {
  return <CheckboxStyled>{children}</CheckboxStyled>;
};

export default Checkbox;
