import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

export const Box = styled.div`
  /* display: flex; */
  padding: 40px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background-color: #a7a55b;
`;
export const ButtonClose = styled.button`
  display: block;
  margin: 24px auto 0;
  padding: 4px 8px;
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
