import React from 'react';
// import styled from 'styled-components';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';

export const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// const Main = styled.main`
//   display: flex;
// `;
