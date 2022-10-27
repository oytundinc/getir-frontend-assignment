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
  chechboxText: string;
}

export const RadioButton = ({ chechboxText }: RadioButtonProps) => {
  return (
    <RadioButtonStyled>
      <input type="radio" id="checkboxText" name="checkboxText" />
      <label htmlFor="checkboxText">{chechboxText} </label>
    </RadioButtonStyled>
  );
};

export default RadioButton;
