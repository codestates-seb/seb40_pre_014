import React from 'react';
import Stacklogo from '../../../assets/images/logo.png';
import { NavHeader } from './Nav.style';

const Nav = () => {
  return (
    <NavHeader>
      <div>
        <img src={Stacklogo} alt="" style={{ height: '50%', width: '50%' }} />
        <div>asdasasd</div>
        <div>asdasdasdsa</div>
        <div>asdasdsad</div>
      </div>
    </NavHeader>
  );
};

export default Nav;
