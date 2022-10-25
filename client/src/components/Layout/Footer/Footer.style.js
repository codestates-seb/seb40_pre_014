import styled from 'styled-components';

export const Footers = styled.footer`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 35vh;
  background-color: #232629;
`;

export const FooterBox = styled.div`
  flex: 1 1 auto;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  max-width: 1300px;
  padding: 40px 30px 40px 30px;
`;

export const IconBox = styled.div`
  flex: 0 0 auto;
  margin: 0px 10px 10px 0px;
`;

export const BottomIcon = styled.img`
  width: 50px;
  height: 60px;
`;

export const BottomNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  column-gap: 40px;
  margin-right: 20px;
  margin-bottom: 30px;
  row-gap: 30px;

  @media screen and (max-width: 640px) {
    min-height: 300px;
  }
`;
