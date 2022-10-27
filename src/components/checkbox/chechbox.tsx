import styled from "styled-components";

const CheckboxStyled = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 22px;
    height: 22px;

    background: #1ea4ce;
    box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
    border-radius: 2px;
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

interface CheckboxProps {
  chechboxText: string;
}

export const Checkbox = ({ chechboxText }: CheckboxProps) => {
  return (
    <CheckboxStyled>
      <input type="checkbox" id="checkboxText" name="checkboxText" />
      <label htmlFor="checkboxText">{chechboxText} </label>
    </CheckboxStyled>
  );
};

export default Checkbox;
