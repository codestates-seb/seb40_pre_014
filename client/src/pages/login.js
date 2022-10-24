import React from 'react';
import Nav from '../components/Layout/Nav/Nav';
import {
  LoginContainer,
  Input_Wrap,
  Login_Form,
  Login_Button,
} from './login.style';

const Login = () => {
  return (
    <>
      <Nav />
      <LoginContainer>
        <Login_Form>
          <Input_Wrap>
            <span>Email</span>
            <input />
          </Input_Wrap>
          <Input_Wrap>
            <span>Password</span>
            <input />
          </Input_Wrap>
          <Login_Button>
            <span> Log in </span>
          </Login_Button>
        </Login_Form>
        <div>
          <span> Don&apos;t have an account?</span>
          <span> Sign up </span>
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;
