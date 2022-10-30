import { CheckboxStyled } from "./checkbox.styles";

export interface CheckboxProps {
  children: string;
  onChange?: () => void;
}

export const Checkbox = ({ children, onChange }: CheckboxProps) => {
  return <CheckboxStyled onChange={onChange}>{children}</CheckboxStyled>;
};

export default Checkbox;
