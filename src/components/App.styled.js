import styled from 'styled-components';
import back from '../img/background@2x.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  font-size: 20px;
  color: #010101;
  background-image: linear-gradient(
      to right,
      rgba(27, 38, 38, 0.8),
      rgba(27, 38, 38, 0.8)
    ),
    linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),
    url(${back});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
