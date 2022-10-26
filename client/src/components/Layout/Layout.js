import React from 'react';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import LeftSide from './SideBar/LeftSide';
import RightSide from './SideBar/RightSide';
import Tag from './SideBar/Tag';
import styled from 'styled-components';

const Layout = () => {
  return (
    <LayoutBox>
      <Nav />
      <MiddleBox>
        <LeftSide />
        <Main />
        <RightBox>
          <RightSide />
          <Tag />
        </RightBox>
      </MiddleBox>
      <Footer />
    </LayoutBox>
  );
};

const LayoutBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const MiddleBox = styled.div`
  display: flex;
  width: 100%;
  margin: 0px 50%;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Layout;
