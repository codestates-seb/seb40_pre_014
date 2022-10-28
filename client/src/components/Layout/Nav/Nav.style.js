import styled from 'styled-components';

export const NavHeader = styled.header`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;
  background-color: #f8f9f9;
  box-shadow: 0px 1px 2px hsl(210, 8%, 85%);
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
  justify-content: center;
  width: 100%;
  max-width: 1400px;
`;

export const LogoBox = styled.div`
  position: relative;
  margin-top: 10px;
  height: 40px;
`;

export const LogoImg = styled.img`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
