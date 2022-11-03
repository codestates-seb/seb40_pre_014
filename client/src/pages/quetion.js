import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Question_Wrapper from '../components/Question_Input';
import Btn from '../components/Button/Btn';
import TextEditor from '../components/TextEditor';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Question = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [tags, setTags] = useState();
  const [text, setText] = useState('');

  const titleHandler = (e) => {
    let temp = e.target.value;
    setTitle(temp);
  };
  const tagsHandler = (e) => {
    let temp = e.target.value;
    setTags(temp.split(','));
  };

  const submitHandler = async () => {
    await axios
      .post(
        `/question/${localStorage.getItem('UserID')}`,
        {
          title: title,
          content: text,
          questionTags: tags,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          },
        },
      )
      .then(navigate('/'));
  };

  return (
    <>
      <Question_Container>
        <Question_Main>
          <div>
            <Question_Wrapper
              subTitle={'Title'}
              info={
                'Be specific and imagine you’re asking a question to another person.'
              }
            />
            <Question_Input
              onChange={titleHandler}
              placeholder="e.g Is there R function for finding the index of an element in a vector?"
            />
          </div>

          <div>
            <Question_Wrapper
              subTitle={'Body'}
              info={
                'Include all the information someone would need to answer your question.'
              }
            />
            <TextEditor height={'550px'} setText={setText} />
          </div>
          <div>
            <Question_Wrapper
              subTitle={'Tags'}
              info={'Add up to 5 tags to describe what your question is about'}
            />
            <Question_Input
              onChange={tagsHandler}
              placeholder="e.g (angular sql-server string)"
            />
          </div>
        </Question_Main>
        <Btn
          text={'Review your question'}
          backColor={'#0d8ae1'}
          width={'148px'}
          height={'37px'}
          fontSize={'13.8px'}
          hoverColor={'#0069c5'}
          margin={'20px 0px 0px 0px'}
          funcProps={submitHandler}
        ></Btn>
      </Question_Container>
    </>
  );
};

const Question_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(239, 240, 241);
  height: 1200px;
  width: 100vw;
`;

const Question_Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 850px;
  width: 870px;
  padding: 20px;
  border-radius: 5px;
  background: white;
  box-shadow: rgb(128, 128, 128) 0px 0px 3px 0px;
  margin-top: 50px;
`;

const Question_Input = styled.input`
  height: 25px;
  border: 1px solid rgb(178, 183, 188);
  border-radius: 3px;
  font-size: 13.3px;
  padding: 8px 10px 8px 10px;
  width: 850px;
`;

export default Question;
