import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LeftSide from '../components/Layout/SideBar/LeftSide';
import Btn from '../components/Button/Btn';
import { Link } from 'react-router-dom';
import VoteBtn from '../components/Detail/VoteBtn';
import Detail_User from '../components/Detail/Detail_User';
import Answer from '../components/Detail/Answer';
import userImg from '../assets/images/user.png';
import TextEditor from '../components/TextEditor';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Viewer } from '@toast-ui/react-editor';

const Question_Detail = () => {
  const [questionInfo, setQuestionInfo] = useState();
  const [answerInfo, setAnswerInfo] = useState([]);
  const [text, setText] = useState('');
  let params = useParams();

  const getQuestionDetail = async () => {
    const res = await axios.get(`/question/detail/${params.id}`);
    return res.data.data;
  };

  const submitHandler = async () => {
    await axios.post(
      `/answer`,
      {
        questionId: questionInfo && questionInfo.questionId,
        userId: localStorage.getItem('UserID'),
        content: text,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
        },
      },
    );
  };

  useEffect(() => {
    getQuestionDetail().then((el) => {
      setQuestionInfo(el.question);
      setAnswerInfo(el.answer);
    });
  }, []);

  const IncreaseVote = async () => {
    await axios.post(
      `/question/like/${params.id}`,
      {
        status: '1',
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
        },
      },
    );
  };

  const DecreaseVote = async () => {
    await axios.post(
      `/question/like/${params.id}`,
      {
        status: '0',
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
        },
      },
    );
  };

  return (
    <>
      <Detail_Container>
        <LeftSide />
        <Detail_Wrapper>
          <Detail_Top>
            <QuestionInfo>
              <h1> {questionInfo && questionInfo.title} </h1>
              <div>
                <span className="sub">
                  Asked: {questionInfo && questionInfo.regDate}
                </span>
                <span className="sub">
                  View: {questionInfo && questionInfo.view}
                </span>
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
            <VoteBtn
              vote={questionInfo && questionInfo.voteCount}
              IncreaseVote={IncreaseVote}
              DecreaseVote={DecreaseVote}
            />
            <Detail_Content>
              {questionInfo && <Viewer initialValue={questionInfo.content} />}
              <Detail_Tags_Wrapper>
                {questionInfo &&
                  questionInfo.tagLists.map((tag, idx) => {
                    return (
                      <Detail_Tags key={idx}>{tag.tags.tagName}</Detail_Tags>
                    );
                  })}
              </Detail_Tags_Wrapper>
            </Detail_Content>
            <Detail_User
              img={userImg}
              nickName={questionInfo && questionInfo.nickName}
            />
          </Detail_Body>

          <Detail_Answer>
            <h1> {questionInfo && answerInfo.length} Answers </h1>
            {answerInfo.length > 0 &&
              answerInfo.map((answer) => {
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
            <TextEditor height={'300px'} setText={setText} />
            <Btn
              text={'Post Your Answer'}
              backColor={'#0d8ae1'}
              width={'180px'}
              height={'35px'}
              fontSize={'13.6px'}
              hoverColor={'#0069c5'}
              cursorPointer={'pointer'}
              margin={'40px 5px 20px 0'}
              funcProps={submitHandler}
            ></Btn>
          </Detail_Bottom>
        </Detail_Wrapper>
      </Detail_Container>
    </>
  );
};

const Detail_Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px 0 0 0;
`;

const Detail_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
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
