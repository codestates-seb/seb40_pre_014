import React, { useState } from 'react';
import Btn from '../components/Button/Btn';
import Nav from '../components/Layout/Nav/Nav';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, Input_Wrap, Login_Form } from './login.style';
// import { useRecoilState } from 'recoil';
// import { loginStates } from '../states/login';
import axios from 'axios';

const Login = () => {
  // const [login, setLogin] = useRecoilState(loginStates);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  const submitHandle = () => {
    axios
      .post('/api/users/authentication', {
        email: email,
        password: password,
      })
      .then((res) => localStorage.setItem('Token', res.data.token))
      .then(navigate('/'))
      .then(window.location.reload());
  };

  return (
    <div>
      {/* {login.Profilelogin ? navigate('/') : ''} */}
      <Nav />
      <LoginContainer>
        <Login_Form>
          <Input_Wrap>
            <span>Email</span>
            <input onChange={emailHandle} />
          </Input_Wrap>
          <Input_Wrap>
            <span>Password</span>
            <input onChange={passwordHandle} type={'password'} />
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
            funcProps={submitHandle}
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
