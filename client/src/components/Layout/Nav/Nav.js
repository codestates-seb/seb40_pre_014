import React from 'react';
import Stacklogo from '../../../assets/images/logo.png';
import SmStackLogo from '../../../assets/images/768px-Stack_Overflow_icon.svg.png';
import { NavHeader, NavBox, LogoBox, LogoImg, SmallLogo } from './Nav.style';
import Bars from '../../Bars/Bars';
import { Link } from 'react-router-dom';
import TopLink from './TopLink/TopLink';
import SearchBox from './SearchBox/SearchBox';
import AuthButton from './AuthButtons/AuthButton';
import { useRecoilState } from 'recoil';
import { loginStates } from '../../../states/login';
import HideAuthButton from './AuthButtons/HideAuthButton';

const Nav = () => {
  const [login, setLogin] = useRecoilState(loginStates); // eslint-disable-line no-unused-vars
  return (
    <NavHeader>
      <NavBox>
        <Bars />
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
