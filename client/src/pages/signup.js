import React, { useState } from 'react';
import Btn from '../components/Button/Btn';
import Nav from '../components/Layout/Nav/Nav';
import { useNavigate } from 'react-router-dom';
import { Input_Wrap } from './login.style';
import signicon from '../assets/images/signup2.png';
import signicon1 from '../assets/images/signup1.png';
import signicon3 from '../assets/images/signup3.png';
import signicon4 from '../assets/images/signup4.png';
import axios from 'axios';
import {
  SignupContainer,
  Signup_Form,
  Wrap,
  Description,
} from './signup.style';
import Failcomment from '../components/Failcomment';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIspassword] = useState(false);

  const check = (data, type) => {
    if (type === 'password') {
      if (data.length >= 8) {
        return true;
      } else return false;
    }
    if (type === 'email') {
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(data);
    }
    if (type === 'name') {
      if (data.length !== 0) {
        return true;
      } else return false;
    }
  };

  const handleChangeN = (event) => {
    if (check(event.target.value, 'name')) {
      setIsName(true);
    } else {
      setIsName(false);
    }
    setName(event.target.value);
  };

  const handleChangeE = (event) => {
    if (check(event.target.value, 'email')) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
    setEmail(event.target.value);
  };

  const handleChangeP = (event) => {
    if (check(event.target.value, 'password')) {
      setIspassword(true);
    } else {
      setIspassword(false);
    }
    setPassword(event.target.value);
  };

  const submitHandle = async () => {
    if (isEmail && isName && isPassword) {
      try {
        await axios.post('/api/users', {
          email: email,
          password: password,
          nickName: name,
        });
        navigate('/login');
      } catch {
        alert('양식을 확인해주세요.');
      }
    }
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
              {isName ? null : (
                <Failcomment comment={'닉네임을 입력해주세요.'} />
              )}
            </Input_Wrap>
            <Input_Wrap>
              <span>Email</span>
              <input
                value={email}
                onChange={handleChangeE}
                style={{ marginBottom: 0 }}
              />
              {isEmail ? null : (
                <Failcomment comment={'이메일 형식을 확인해주세요.'} />
              )}
            </Input_Wrap>
            <Input_Wrap>
              <span>Password</span>
              <input
                type={'password'}
                value={password}
                onChange={handleChangeP}
                style={{ marginBottom: 0 }}
              />
              {isPassword ? null : (
                <Failcomment comment={'8글자 이상 입력해주세요.'} />
              )}
            </Input_Wrap>
            <div className="comment">
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </div>
            <Btn
              funcProps={submitHandle}
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
