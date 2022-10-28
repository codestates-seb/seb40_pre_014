import React from 'react';
import Stacklogo from '../../../assets/images/logo.png';
import { NavHeader, NavBox, LogoBox, LogoImg } from './Nav.style';
// import Bars from '../../Bars/Bars';
import { Link } from 'react-router-dom';
import TopLink from './TopLink/TopLink';
import SearchBox from './SearchBox/SearchBox';
import AuthButton from './AuthButtons/AuthButton';

const Nav = () => {
  return (
    <NavHeader>
      <NavBox>
        {/* <Bars /> */}
        <LogoBox>
          <Link to="/">
            <LogoImg src={Stacklogo} alt="" />
          </Link>
        </LogoBox>
        <TopLink />
        <SearchBox />
        <AuthButton />
      </NavBox>
    </NavHeader>
  );
};

export default Nav;
