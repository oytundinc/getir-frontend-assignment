import { CheckboxStyled } from "./checkbox.styles";

export interface CheckboxProps {
  children: string;
  value?: string;
  onChange?: () => void;
}

export const Checkbox = ({ children, onChange, value }: CheckboxProps) => {
  return (
    <CheckboxStyled value={value} onChange={onChange}>
      {children}
    </CheckboxStyled>
  );
};

export default Checkbox;
