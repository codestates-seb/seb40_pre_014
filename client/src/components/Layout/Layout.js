import React from 'react';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import styled from 'styled-components';

const Layout = () => {
  return (
    <LayoutBox>
      <Nav />
      <Main />
      <Footer />
    </LayoutBox>
  );
};

const LayoutBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export default Layout;
