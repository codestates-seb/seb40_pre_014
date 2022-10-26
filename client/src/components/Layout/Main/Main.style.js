import styled from 'styled-components';

export const MainBox = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding-top: 50px;
`;

export const MainMidBox = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 420px);
  max-width: 1300px;
  overflow-x: hidden;
`;

export const MainMiniBox = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
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
    padding: 10px 0 0 0;
  }
`;

export const MainFirstBox = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  h1 {
    font-size: 30px;
  }
`;

export const MainSecondBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px 0 20px;
  margin: 0 0 20px 0;
  h2 {
    font-size: 20px;
  }
`;

export const RigthSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
`;

export const ContentsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;

  footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
