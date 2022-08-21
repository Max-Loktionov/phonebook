import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NAVLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  border-radius: 4px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: white;
    background-color: #3d1d4e96;
  }
`;
