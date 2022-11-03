import React from 'react';
import { useRecoilState } from 'recoil';
import { TapStates } from '../../../../states/Tap';
import { HideableList, Products, TopLinkList, TopLinks } from './TopLink.style';

const TopLink = () => {
  const [tap, setTap] = useRecoilState(TapStates); // eslint-disable-line no-unused-vars

  return (
    <TopLinkList>
      <HideableList
        onClick={() => setTap({ One: true, Two: false, Three: false })}
      >
        <TopLinks to="/">About</TopLinks>
      </HideableList>
      <Products onClick={() => setTap({ One: true, Two: false, Three: false })}>
        <TopLinks to="/">Products</TopLinks>
      </Products>
      <HideableList
        onClick={() => setTap({ One: true, Two: false, Three: false })}
      >
        <TopLinks to="/">For Teams</TopLinks>
      </HideableList>
    </TopLinkList>
  );
};

export default TopLink;
