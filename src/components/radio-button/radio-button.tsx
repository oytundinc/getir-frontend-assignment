import { RadioButtonStyled } from "./radio-button.styles";

export interface RadioButtonProps {
  radioButtonText: string;
  value: any;
}

export const RadioButton = ({ radioButtonText, value }: RadioButtonProps) => {
  return <RadioButtonStyled value={value}>{radioButtonText}</RadioButtonStyled>;
};

export default RadioButton;
