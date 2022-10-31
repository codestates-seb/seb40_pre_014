import styled from 'styled-components';

export const MainBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  //nav 높이만큼 패딩 해줘야 side바 border 안 끊김
  padding-top: 50px;
`;

export const MainMidBox = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 420px);
  max-width: 1300px;
  display: flex;
`;

//right 사이드 줄어들 때, 변경해야 할 미디어 css
export const MainMiniBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1100px) {
  }
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  overflow: hidden;
  ul {
    border-top: 0.2px solid #e3e5e7;
    display: flex;
    width: 100%;
    padding: 10px 0 10px 0;
  }
`;

export const MainFirstBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 0 20px;
  h1 {
    font-size: 30px;
  }
`;

export const MainSecondBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 20px 0 20px;
  margin: 0 0 20px 0;
  h2 {
    font-size: 20px;
  }
`;

export const SectionUL = styled.ul``;
export const SectionLI = styled.li`
  display: flex;
`;

export const RigthSection = styled.section`
  display: flex;
  width: 70px;
  flex-direction: column;
  padding: 0 0 0 50px;
  font-size: 12px;
  div {
    padding: 2px;
  }
  div:nth-child(1) {
    font-weight: 550;
  }
  div:nth-child(2) {
    color: #6a737c;
  }
  div:nth-child(3) {
    color: #6a737c;
  }
`;

export const ContentLI = styled.li`
  width: 100%;
`;
export const ContentsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
  overflow: hidden;
  gap: 10px;
  a {
    font-size: 15px;
    color: #0078cd;
    text-decoration: none;
  }
  p {
    font-size: 13px;
  }
  footer {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1100px) {
      flex-direction: column;
    }
  }
`;
