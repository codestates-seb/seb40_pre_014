import styled from 'styled-components';

export const NavHeader = styled.header`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;
  height: 55px;
  background-color: #f8f9f9;
  box-shadow: 0px 1px 2px hsl(210, 8%, 85%);
  z-index: 2;
  overflow-x: hidden;
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
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1400px;
`;

export const LogoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 15px 10px 10px 10px;
  padding-left: 10px;
  @media screen and (max-width: 580px) {
    margin: 15px 10px 10px 10px;
  }
`;

export const LogoImg = styled.img`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #dddd;
  }
  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const SmallLogo = styled.img`
  display: none;
  @media screen and (max-width: 580px) {
    width: 35px;
    height: 100%;
    display: flex;
    margin: -5px -5px 0 0;
    cursor: pointer;
    &:hover {
      background-color: #dddd;
    }
  }
`;
