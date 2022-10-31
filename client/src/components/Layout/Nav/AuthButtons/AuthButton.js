import React from 'react';
import Btn from '../../../Button/Btn';
import { AuthButtonBox, AuthButtonLink } from './AuthButton.style';

const AuthButton = () => {
  return (
    <AuthButtonBox>
      <AuthButtonLink to="/login">
        <Btn
          text={'Log in'}
          backColor={'#dee9f2'}
          textColor={'#41739a'}
          width={'50px'}
          height={'35px'}
          fontSize={'13px'}
          hoverColor={'#aacde7'}
        ></Btn>
      </AuthButtonLink>
      <AuthButtonLink to="/signup">
        <Btn
          text={'Sign up'}
          backColor={'#0d8ae1'}
          width={'60px'}
          height={'35px'}
          fontSize={'13px'}
          hoverColor={'#0069c5'}
        ></Btn>
      </AuthButtonLink>
    </AuthButtonBox>
  );
};

export default AuthButton;
