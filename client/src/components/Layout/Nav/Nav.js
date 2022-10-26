import React from 'react';
import Stacklogo from '../../../assets/images/logo.png';
import { NavHeader, NavBox, LogoBox } from './Nav.style';
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
            <img
              src={Stacklogo}
              alt=""
              style={{
                height: '35px',
                width: '150px',
                marginLeft: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            />
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
