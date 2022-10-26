import React from 'react';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import LeftSide from './SideBar/LeftSide';
import RightSide from './SideBar/RightSide';
import Tag from './SideBar/Tag';
import styled from 'styled-components';

const LayoutBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Layout = () => {
  return (
    <LayoutBox>
      <Nav />
      <LeftSide />
      <RightSide />
      <Tag />
      <Main />
      <Footer />
    </LayoutBox>
  );
};

export default Layout;
