import { CheckboxStyled } from "./checkbox.styles";

export interface CheckboxProps {
  children: string;
  value?: string;
  onChange?: (event: any) => void;
  checked?: boolean
}

export const Checkbox = ({
  children,
  onChange,
  value,
  checked,
}: CheckboxProps) => {
  return (
    <CheckboxStyled value={value} onChange={onChange} checked={checked}>
      {children}
    </CheckboxStyled>
  );
};

export default Checkbox;
