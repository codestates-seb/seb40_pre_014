import React from 'react';
import { HideableList, Products, TopLinkList, TopLinks } from './TopLink.style';

const TopLink = () => {
  return (
    <TopLinkList>
      <HideableList>
        <TopLinks to="/">About</TopLinks>
      </HideableList>
      <Products>
        <TopLinks to="/">Products</TopLinks>
      </Products>
      <HideableList>
        <TopLinks to="/">For Teams</TopLinks>
      </HideableList>
    </TopLinkList>
  );
};

export default TopLink;
