import styled from 'styled-components';

export const MainBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 50px 0 0 0;
  overflow-x: hidden;
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
  @media screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MainFirstBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 0 20px;
  h1 {
    font-size: 27px;
  }
`;

export const MainSecondBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 20px 0 20px;
  margin: 0 0 20px 0;
  h2 {
    font-size: 20px;
    padding-top: 7px;
  }
`;

export const SectionUL = styled.ul`
  @media screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
`;
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
  @media screen and (max-width: 580px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: fit-content;
    padding: 0;
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
    @media screen and (max-width: 580px) {
      font-size: 20px;
      padding: 5px 0;
    }
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
  @media screen and (max-width: 580px) {
    display: flex;
  }
`;

export const Tags = styled.div`
  display: flex;
  width: 300px;
  overflow: hidden;
  @media screen and (max-width: 820px) {
    width: 300px;
  }
`;

export const Tag = styled.div`
  margin-right: 5px;
  background: rgb(221, 233, 242);
  border-radius: 3px;
  color: #39739d;
  padding: 3px;
  font-size: 13px;
`;

export const LinkBox = styled.button`
  text-decoration: none;
  border-style: none;
  background: white;
`;

export const Name = styled.div`
  font-weight: 600;
`;

export const Date = styled.div`
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 15px;
  height: 15px;
  margin-top: 4px;
  padding-right: 5px;
`;

export const ProfileAndDate = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  @media screen and (max-width: 1100px) {
    padding-top: 5px;
  }
`;

export const Contents = styled.p`
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
