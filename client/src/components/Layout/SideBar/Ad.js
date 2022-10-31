import React from 'react';
import ad from '../../../assets/images/ad.png';
import Btn from '../../Button/Btn';
import { ADtitle, ADsubtitle, ADImg, ADBox } from './Ad.style';

const Ad = () => {
  return (
    <ADBox>
      <ADtitle>Stack Overflow for Teams</ADtitle>
      <ADsubtitle>
        - Start collaborating and sharing organizational knowledge.
      </ADsubtitle>
      <ADImg src={ad} alt="" />
      <Btn
        text={'Create free Team'}
        backColor={'#F48225'}
        width={'120px'}
        height={'35px'}
        fontSize={'13px'}
        hoverColor={'#FF8F33'}
        cursorPointer={'pointer'}
        margin={'0 0 0 15px'}
      ></Btn>
    </ADBox>
  );
};

export default Ad;
