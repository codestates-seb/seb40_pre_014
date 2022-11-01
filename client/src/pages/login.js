import React from 'react';
import Btn from '../components/Button/Btn';
import Nav from '../components/Layout/Nav/Nav';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, Input_Wrap, Login_Form } from './login.style';
import { useRecoilState } from 'recoil';
import { loginStates } from '../states/login';

const Login = () => {
  const [login, setLogin] = useRecoilState(loginStates);
  console.log(login);
  const navigate = useNavigate();

  return (
    <div>
      {login.Profilelogin ? navigate('/') : ''}
      <Nav />
      <LoginContainer>
        <Login_Form>
          <Input_Wrap>
            <span>Email</span>
            <input />
          </Input_Wrap>
          <Input_Wrap>
            <span>Password</span>
            <input type={'password'} />
          </Input_Wrap>
          <Btn
            text={'Log in'}
            textColor={'white'}
            width={'245px'}
            height={'40px'}
            backColor={'#0d8ae1'}
            fontSize={'16px'}
            hoverColor={'#0069c5'}
            cursorPointer={'pointer'}
            funcProps={() => setLogin({ Profilelogin: true })}
          />
        </Login_Form>
        <div className="support">
          <div> Don&apos;t have an account?</div>
          <button className="signup" onClick={() => navigate('/signup')}>
            Sign up
          </button>
        </div>
      </LoginContainer>
    </div>
  );
};

export default Login;
