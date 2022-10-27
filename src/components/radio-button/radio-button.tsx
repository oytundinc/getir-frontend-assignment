import styled from "styled-components";

const RadioButtonStyled = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 22px;
    height: 22px;

    background: #ffffff;
    border: 2px solid red;
    border-radius: 17.5px;
  }

  label {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    align-items: center;
    letter-spacing: 0.16px;

    color: #525252;
  }
`;

interface RadioButtonProps {
  radioButtonText: string;
}

export const RadioButton = ({ radioButtonText }: RadioButtonProps) => {
  return (
    <RadioButtonStyled>
      <input type="radio" id="radioButtonText" name="radioButtonText" />
      <label htmlFor="radioButtonText">{radioButtonText} </label>
    </RadioButtonStyled>
  );
};

export default RadioButton;
