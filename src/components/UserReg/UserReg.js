import React from 'react';
import { NAVLink } from './UserReg.styled';

export default function AuthNav() {
  return (
    <div>
      <NAVLink to="register"> Register</NAVLink>
      <NAVLink to="login"> Log in</NAVLink>
    </div>
  );
}
