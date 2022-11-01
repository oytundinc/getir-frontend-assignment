import CheckOutlined from "@ant-design/icons/lib/icons/CheckOutlined";
import { RadioButtonStyled } from "./radio-button.styles";

export interface RadioButtonProps {
  radioButtonText: string;
  value: any;
  isChecked: boolean;
}

export const RadioButton = ({
  radioButtonText,
  value,
  isChecked,
}: RadioButtonProps) => {
  return (
    <RadioButtonStyled value={value}>
      <span className="icon-check">
        {isChecked && <CheckOutlined style={{ fontSize: "12px" }} />}
      </span>
      <span className="text-container">{radioButtonText}</span>
    </RadioButtonStyled>
  );
};

export default RadioButton;
