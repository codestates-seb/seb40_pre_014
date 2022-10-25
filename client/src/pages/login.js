import React from 'react';
import Btn from '../components/Btn';
import Nav from '../components/Layout/Nav/Nav';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, Input_Wrap, Login_Form } from './login.style';

const Login = () => {
  const navigate = useNavigate();
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
          <Btn
            text={'Log in'}
            textColor={'white'}
            width={'245px'}
            height={'40px'}
            backColor={'#0d8ae1'}
            fontSize={'16px'}
            hoverColor={'#0069c5'}
          ></Btn>
        </Login_Form>
        <div className="support">
          <div> Don&apos;t have an account?</div>
          <button className="signup" onClick={() => navigate('/signup')}>
            Sign up
          </button>
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;
