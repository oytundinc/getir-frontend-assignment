import { RadioButtonStyled } from "./radio-button.styles";

export interface RadioButtonProps {
  radioButtonText: string;
}

export const RadioButton = ({ radioButtonText }: RadioButtonProps) => {
  return <RadioButtonStyled>{radioButtonText}</RadioButtonStyled>;
};

export default RadioButton;
