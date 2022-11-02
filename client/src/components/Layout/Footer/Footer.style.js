import styled from 'styled-components';

export const Footers = styled.footer`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: #232629;
  padding-bottom: 35px;
`;

export const FooterBox = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-flow: row wrap;
  max-width: 1300px;
  padding: 40px 30px 40px 30px;
  position: relative;

  // '>'는 자식 선택자
  // '*' 자식 전체
  & > * {
    flex: 1 1 auto;
  }
`;

export const IconBox = styled.div`
  flex: 0 0 auto;
  margin: 0px 10px 10px 0px;
`;

export const BottomIcon = styled.img`
  width: 50px;
  height: 60px;

  @media screen and (max-width: 980px) {
    width: 60px;
    height: 70px;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const BottomNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  column-gap: 40px;
  margin-right: 50px;
  margin-bottom: 30px;
  row-gap: 30px;

  @media screen and (max-width: 640px) {
    min-height: 300px;
  }
`;
