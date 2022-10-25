import React from 'react';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import { LayoutBox } from './Layout.style';

const Layout = () => {
  return (
    <LayoutBox>
      <Nav />
      <Main />
      <Footer />
    </LayoutBox>
  );
};

export default Layout;
