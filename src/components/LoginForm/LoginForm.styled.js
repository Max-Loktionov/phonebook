import styled from 'styled-components';

export const Form = styled.form`
  background-color: #6c696ca1;
  border: none;
  border-radius: calc(0.5 * 44px);
  height: 100%;
  padding: 36px;

  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const Input = styled.input`
  background-color: white;
  border: none;
  border-radius: calc(0.5 * 44px);
  height: 100%;
  outline: none;
  padding: 4px 44px 4px 16px;
  font-size: 24px;
`;

export const ButtonEye = styled.button`
  position: absolute;
  padding: 0;
  right: 16px;
  width: 24px;
  height: 100%;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  background-color: white;
  pointer-events: auto;
`;

export const InputWrapper = styled.div`
  position: relative;
  height: 100%;
  margin: 24px 0;
`;

export const Button = styled.button`
  margin-left: auto;
  margin-right: 24px;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #000000;
  font-size: 16px;
  color: #fff;
  :hover,
  :focus {
    outline: 2px solid #fff;
  }
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;
