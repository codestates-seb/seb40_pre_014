import styled from 'styled-components';

export const NavHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #f8f9f9;
  box-shadow: 0px 1px 2px #e3e5e7;
  z-index: 2;

  &::before {
    display: block;
    position: absolute;
    top: 0%;
    content: '';
    width: 100%;
    height: 3px;
    background-color: #f48225;
    z-index: 2;
  }
`;

export const NavBox = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  height: 50px;
  padding-top: 3px;
`;

export const LogoBox = styled.div`
  position: relative;
  margin-left: 15px;
  margin-top: 10px;
  height: 40px;
  overflow: hidden;
`;
