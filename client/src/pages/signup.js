import React, { useState } from 'react';
import Btn from '../components/Button/Btn';
import Nav from '../components/Layout/Nav/Nav';
import { useNavigate } from 'react-router-dom';
import { Input_Wrap } from './login.style';
import signicon from '../assets/images/signup2.png';
import signicon1 from '../assets/images/signup1.png';
import signicon3 from '../assets/images/signup3.png';
import signicon4 from '../assets/images/signup4.png';
import {
  SignupContainer,
  Signup_Form,
  Wrap,
  Description,
} from './signup.style';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIspassword] = useState(false);

  const passName = (name) => {
    if (name.length !== 0) {
      return true;
    } else {
      return false;
    }
  };

  // 삼항연산자로 하면 적용이 안됨 왜?
  const pass = (password) => {
    if (password.length >= 8) {
      return true;
    } else {
      return false;
    }
  };

  const passEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleChangeN = (event) => {
    if (passName(event.target.value) === false) {
      setIsName('Please enter your nickname');
    } else {
      setIsName(null);
    }
    setName(event.target.value);
  };

  const handleChangeE = (event) => {
    if (passEmail(event.target.value) === false) {
      setIsEmail('is not a valid email adress');
    } else {
      setIsEmail(null);
    }
    setEmail(event.target.value);
  };

  const handleChangeP = (event) => {
    if (pass(event.target.value) === false) {
      setIspassword('Please enter at least 8 characters');
    } else {
      setIspassword(null);
    }
    setPassword(event.target.value);
  };

  return (
    <>
      <Nav />
      <Wrap>
        <Description>
          <h1 className="title"> Join the Stack Overflow community </h1>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={signicon1} alt="" className="icon"></img>
            <p> Get unstuck — ask a question </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={signicon3} alt="" className="icon"></img>
            <p> Unlock new privileges like voting and commenting </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={signicon} alt="" className="icon"></img>
            <p> Save your favorite tags, filters, and jobs </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={signicon4} alt="" className="icon"></img>
            <p> Earn reputation and badges </p>
          </div>
          <span>
            Collaborate and share knowledge with a private group for FREE.
          </span>
        </Description>
        <SignupContainer>
          <Signup_Form>
            <Input_Wrap>
              <span>Display Name</span>
              <input
                value={name}
                onChange={handleChangeN}
                style={{ marginBottom: 0 }}
              />
              <div
                style={{
                  color: 'rgb(208, 57, 62)',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  marginTop: '5px',
                  marginBottom: '15px',
                }}
              >
                {isName}
              </div>
            </Input_Wrap>
            <Input_Wrap>
              <span>Email</span>
              <input
                value={email}
                onChange={handleChangeE}
                style={{ marginBottom: 0 }}
              />
              <div
                style={{
                  color: 'rgb(208, 57, 62)',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  marginTop: '5px',
                  marginBottom: '15px',
                }}
              >
                {isEmail}
              </div>
            </Input_Wrap>
            <Input_Wrap>
              <span>Password</span>
              <input
                type={'password'}
                value={password}
                onChange={handleChangeP}
                style={{ marginBottom: 0 }}
              />
              <div
                style={{
                  color: 'rgb(208, 57, 62)',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  marginTop: '5px',
                  marginBottom: '15px',
                }}
              >
                {isPassword}
              </div>
            </Input_Wrap>
            <div className="comment">
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </div>
            <Btn
              text={'Sign up'}
              textColor={'white'}
              width={'245px'}
              height={'40px'}
              backColor={'#0d8ae1'}
              fontSize={'16px'}
              hoverColor={'#0069c5'}
            ></Btn>

            <div className="comment" style={{ marginTop: '20px' }}>
              By clicking “Sign up”, you agree to our terms of service, privacy
              policy and cookie policy
            </div>
          </Signup_Form>
          <div className="support">
            <div> Already have an account?</div>
            <button className="signup" onClick={() => navigate('/login')}>
              Login
            </button>
          </div>
        </SignupContainer>
      </Wrap>
    </>
  );
};

export default Signup;
