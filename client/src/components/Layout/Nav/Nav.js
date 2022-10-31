import React from 'react';
import Stacklogo from '../../../assets/images/logo.png';
import { NavHeader, NavBox, LogoBox, LogoImg } from './Nav.style';
// import Bars from '../../Bars/Bars';
import { Link } from 'react-router-dom';
import TopLink from './TopLink/TopLink';
import SearchBox from './SearchBox/SearchBox';
import AuthButton from './AuthButtons/AuthButton';

const add = async () => {
  const res = await fetch('http://3.38.108.228:8080/api/users');
  const body = await res.json();
  console.log(body);
};

const Nav = () => {
  return (
    <NavHeader>
      <NavBox>
        {/* <Bars /> */}
        <LogoBox onClick={add}>
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
