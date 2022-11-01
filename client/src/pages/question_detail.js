import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Layout/Nav/Nav';
import Footer from '../components/Layout/Footer/Footer';
import LeftSide from '../components/Layout/SideBar/LeftSide';

const Question_Detail = () => {
  return (
    <>
      <Nav></Nav>
      <Detail_Container>
        <LeftSide></LeftSide>
        <Detail_Top>
          <QuestionInfo>
            <h1> 안뇽하세용 제목입니당. </h1>
            <span> Asked: date</span>
            <span> View: number</span>
          </QuestionInfo>
        </Detail_Top>
      </Detail_Container>
      <Footer></Footer>
    </>
  );
};

const Detail_Container = styled.div`
  display: flex;
  height: 100vw;
  width: 100vw;
`;

const Detail_Top = styled.div`
  display: flex;
  margin-top: 60px;
  padding: 20px;
`;

const QuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #3b4045;
  > h1 {
    font-weight: 600;
    font-size: 27px;
  }
`;

export default Question_Detail;
