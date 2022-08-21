import styled from 'styled-components';

export const Label = styled.label`
  color: #f8e3e0;
`;
export const Input = styled.input`
  margin-left: 24px;
  margin-right: auto;
  margin-bottom: 24px;
  padding: 3px;
  border: 2px solid transparent;
  border-radius: 12px;
  caret-color: green;
  :hover,
  :focus {
    border: 2px solid #91b291;
    outline: 1px solid green;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  /* margin-right: 24px; */
  padding: 4px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #000000a6;
  font-size: 14px;
  color: #fff;
  :hover,
  :focus {
    outline: 2px solid #fff;
  }
`;
export const Item = styled.li`
  display: flex;
  margin: 12px;
  border-bottom: 1px dashed #000000a6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
