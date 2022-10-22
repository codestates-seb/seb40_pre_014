import React from 'react';
import Stacklogo from '../../../assets/images/logo.png';

const Nav = () => {
  return (
    <NavHeader>
      <div>
        <img src={Stacklogo} alt="" style={{ height: '50%', width: '50%' }} />
      </div>
    </NavHeader>
  );
};

export default Nav;
