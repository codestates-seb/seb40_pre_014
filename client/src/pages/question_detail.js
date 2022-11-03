import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Layout/Nav/Nav';
import Footer from '../components/Layout/Footer/Footer';
import LeftSide from '../components/Layout/SideBar/LeftSide';
import Btn from '../components/Button/Btn';
import { Link } from 'react-router-dom';
import dummyQuestion from '../static/dymmyQuestion';
import VoteBtn from '../components/Detail/VoteBtn';
import Detail_User from '../components/Detail/Detail_User';
import Answer from '../components/Detail/Answer';
import userImg from '../assets/images/user.png';
import TextEditor from '../components/TextEditor';
import axios from 'axios';

const Question_Detail = () => {
  const IncreaseVote = async () => {
    try {
      const response = await axios.post(`3.38.108.228:8080/question/like/3`, {
        status: 1,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const DecreaseVote = async () => {
    try {
      const response = await axios.post(`3.38.108.228:8080/question/like/3`, {
        status: 0,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav />
      <Detail_Container>
        <LeftSide />
        <Detail_Wrapper>
          <Detail_Top>
            <QuestionInfo>
              <h1> {dummyQuestion[0].title} </h1>
              <div>
                <span className="sub"> Asked: {dummyQuestion[0].regDate}</span>
                <span className="sub"> View: {dummyQuestion[0].view}</span>
              </div>
            </QuestionInfo>
            <Link to={'/question'}>
              <Btn
                text={'Ask Question'}
                backColor={'#0d8ae1'}
                width={'90px'}
                height={'35px'}
                fontSize={'13px'}
                hoverColor={'#0069c5'}
                cursorPointer={'pointer'}
                margin={'5px 5px 0 0'}
              ></Btn>
            </Link>
          </Detail_Top>

          <Detail_Body>
            <VoteBtn IncreaseVote={IncreaseVote} DecreaseVote={DecreaseVote} />
            <Detail_Content>
              <span>{dummyQuestion[0].content}</span>
              <Detail_Tags_Wrapper>
                {dummyQuestion[0].tagList.map((tag, idx) => {
                  return <Detail_Tags key={idx}>{tag}</Detail_Tags>;
                })}
              </Detail_Tags_Wrapper>
            </Detail_Content>
            <Detail_User img={userImg} nickName={dummyQuestion[0].nickName} />
          </Detail_Body>

          <Detail_Answer>
            <h1> {dummyQuestion[0].answers.length} Answers </h1>
            {dummyQuestion[0].answers.map((answer) => {
              return (
                <Answer
                  key={answer.answerId}
                  img={userImg}
                  content={answer.content}
                  nickname={answer.nickName}
                  voteCount={answer.voteCount}
                />
              );
            })}
          </Detail_Answer>
          <Detail_Bottom>
            <h1> Your Answer </h1>
            <TextEditor height={'300px'} />
            <Btn
              text={'Post Your Answer'}
              backColor={'#0d8ae1'}
              width={'180px'}
              height={'35px'}
              fontSize={'13.6px'}
              hoverColor={'#0069c5'}
              cursorPointer={'pointer'}
              margin={'40px 5px 0 0'}
            ></Btn>
          </Detail_Bottom>
        </Detail_Wrapper>
      </Detail_Container>
      <Footer />
    </>
  );
};

const Detail_Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100vw;
  width: 100vw;
  padding-top: 50px;
`;

const Detail_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
`;

const Detail_Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 20px 20px 20px;
  padding: 20px 0px 20px 0px;
  border-bottom: 1px solid #e3e5e7;
  width: 100%;
  height: 50px;
`;

const QuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #3b4045;
  > h1 {
    font-weight: 600;
    font-size: 27px;
    margin-bottom: 10px;
  }

  .sub {
    font-size: 13px;
    color: #6a737c;
    margin-right: 10px;
  }
`;

const Detail_Body = styled.div`
  display: flex;
  position: relative;
  width: 1200px;
  height: 300px;
  margin: 0px 20px;
  border-bottom: 1px solid #e3e5e7;
`;

const Detail_Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1100px;
  height: 280px;
  padding: 10px;
  > span {
    font-size: 15px;
    margin-bottom: 40px;
  }
`;

const Detail_Tags_Wrapper = styled.div`
  display: flex;
`;

const Detail_Tags = styled.div`
  width: 70px;
  height: 15px;
  padding: 4px 6px 4px 6px;
  margin: 2px;
  background: #e1ecf4;
  border-radius: 3px;
  color: #39739d;
  font-size: 11px;
`;

const Detail_Answer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 20px;

  > h1 {
    font-size: 19px;
  }
`;

const Detail_Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;

  > h1 {
    font-size: 19px;
    margin-bottom: 15px;
  }
`;

export default Question_Detail;
