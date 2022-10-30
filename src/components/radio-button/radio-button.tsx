import { RadioButtonStyled } from "./radio-button.styles";

export interface RadioButtonProps {
  radioButtonText: string;
  onChange?: () => void;
}

export const RadioButton = ({
  radioButtonText,
  onChange,
}: RadioButtonProps) => {
  return (
    <RadioButtonStyled onChange={onChange}>{radioButtonText}</RadioButtonStyled>
  );
};

export default RadioButton;
