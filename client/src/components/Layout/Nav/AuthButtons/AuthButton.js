import React from 'react';
import {
  AuthButtonBox,
  LoginBox,
  SignupBox,
  AuthButtonLink,
} from './AuthButton.style';

const AuthButton = () => {
  return (
    <AuthButtonBox>
      <AuthButtonLink to="/login">
        <LoginBox>Log in</LoginBox>
      </AuthButtonLink>
      <AuthButtonLink to="/signup">
        <SignupBox>Sign up</SignupBox>
      </AuthButtonLink>
    </AuthButtonBox>
  );
};

export default AuthButton;
