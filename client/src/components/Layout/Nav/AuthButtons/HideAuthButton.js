import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  HideContainer,
  ProfileBox,
  ProfileContainer,
  ProfileImg1,
  ProfileImg2,
  ProfileWrap,
  ProfileDiv,
} from './HideAuthButton.style';

import userImg from '../../../../assets/images/user.png';
import HideButton from './HideButton/HideButton';
// import { useRecoilState } from 'recoil';
// import { loginStates } from '../../../../states/login';
import Btn from '../../../Button/Btn';
import axios from 'axios';

const HideAuthButton = () => {
  const [click, setClick] = useState(false);
  const profileModalRef = useRef();
  const [userInfo, setUserInfo] = useState([]); // eslint-disable-line no-unused-vars
  const Token = localStorage.getItem('Token');
  const getUser = async () => {
    const res = await axios.get(`/api/users/authentication`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    return res;
  };

  const submitHandle = () => {
    axios
      .delete('/api/users/authentication')
      .then(localStorage.removeItem('Token'))
      .then(window.location.reload());
  };

  const handleClickOutside = ({ target }) => {
    if (click && !profileModalRef.current.contains(target)) setClick(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  useLayoutEffect(() => {
    getUser().then((el) => setUserInfo([el.data.email, el.data.nickname]));
  }, []);

  const ModalOpen = () => {
    setClick(!click);
  };

  return (
    <HideContainer>
      <ProfileBox
        onClick={ModalOpen}
        ref={profileModalRef}
        className={click ? 'on' : ''}
      >
        <ProfileImg1 src={userImg} alt="프로필" />
        {click && (
          <ProfileContainer>
            <ProfileWrap>
              <ProfileImg2 src={userImg} alt="프로필" />
              <email>{userInfo[0]}</email>
              <nickname>{userInfo[1]}</nickname>
              <ProfileDiv>
                <Btn
                  text={'Log Out'}
                  backColor={'#dee9f2'}
                  textColor={'#41739a'}
                  width={'60px'}
                  height={'35px'}
                  fontSize={'15px'}
                  hoverColor={'#aacde7'}
                  border={'1px solid black'}
                  funcProps={submitHandle}
                  margin={'0 0 5px 0'}
                ></Btn>
              </ProfileDiv>
            </ProfileWrap>
          </ProfileContainer>
        )}
      </ProfileBox>
      <HideButton />
    </HideContainer>
  );
};

export default HideAuthButton;
