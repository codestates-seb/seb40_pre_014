import React, { useEffect, useRef, useState } from 'react';
import {
  HideContainer,
  ProfileBox,
  ProfileContainer,
  ProfileImg,
  ProfileWrap,
  ProfileDiv,
} from './HideAuthButton.style';

import proflieImg from '../../../../assets/images/gugu.png';
import HideButton from './HideButton/HideButton';
// import { useRecoilState } from 'recoil';
// import { loginStates } from '../../../../states/login';
import Btn from '../../../Button/Btn';
import axios from 'axios';

const HideAuthButton = () => {
  const [click, setClick] = useState(false);
  const profileModalRef = useRef();

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
        <ProfileImg src={proflieImg} alt="프로필" />
        {click && (
          <ProfileContainer>
            <ProfileWrap>
              <ProfileImg src={proflieImg} alt="프로필" />
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
