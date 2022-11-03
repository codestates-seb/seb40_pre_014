import React, { useEffect, useRef, useState } from 'react';
import Stacklogo from '../../../assets/images/logo.png';
import SmStackLogo from '../../../assets/images/768px-Stack_Overflow_icon.svg.png';
import { NavHeader, NavBox, LogoBox, LogoImg, SmallLogo } from './Nav.style';
import Bars from '../../Bars/Bars';
import { Link } from 'react-router-dom';
import TopLink from './TopLink/TopLink';
import SearchBox from './SearchBox/SearchBox';
import AuthButton from './AuthButtons/AuthButton';
import { useRecoilState } from 'recoil';
// import { loginStates } from '../../../states/login';
import HideAuthButton from './AuthButtons/HideAuthButton';
import { Container, LeftBar, LinkBox, QuestionIcon } from './Hidebar';
import { TapStates } from '../../../states/Tap';

const Nav = () => {
  // const [login, setLogin] = useRecoilState(loginStates); // eslint-disable-line no-unused-vars
  const [click, setClick] = useState(false);
  const profileModalRef = useRef();
  const [tap, setTap] = useRecoilState(TapStates);
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

  // console.log('navToken', localStorage.getItem('Token'));
  return (
    <NavHeader>
      <NavBox>
        <Container onClick={ModalOpen} ref={profileModalRef}>
          <Bars />
          {click && (
            <LeftBar>
              <ul>
                <LinkBox to="/">
                  <li
                    className={tap.One ? 'A' : ''}
                    role="presentation"
                    onClick={() =>
                      setTap({ One: true, Two: false, Three: false })
                    }
                  >
                    <div className="icon">
                      <QuestionIcon />
                      <div>Questions</div>
                    </div>
                  </li>
                </LinkBox>
                <LinkBox to="/tags">
                  <li
                    className={tap.Two ? 'A' : ''}
                    role="presentation"
                    onClick={() =>
                      setTap({ Two: true, One: false, Three: false })
                    }
                  >
                    <div>Tags</div>
                  </li>
                </LinkBox>
                <LinkBox to="/users">
                  <li
                    className={tap.Three ? 'A' : ''}
                    role="presentation"
                    onClick={() =>
                      setTap({ Three: true, One: false, Two: false })
                    }
                  >
                    <div>Users</div>
                  </li>
                </LinkBox>
              </ul>
            </LeftBar>
          )}
        </Container>
        <LogoBox>
          <Link to="/">
            <LogoImg src={Stacklogo} alt="" />
            <SmallLogo src={SmStackLogo} alt="" />
          </Link>
        </LogoBox>
        <TopLink />
        <SearchBox />
        {localStorage.getItem('Token') ? <HideAuthButton /> : <AuthButton />}
      </NavBox>
    </NavHeader>
  );
};

export default Nav;
