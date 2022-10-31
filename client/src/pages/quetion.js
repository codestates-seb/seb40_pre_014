import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Layout/Nav/Nav';
import { useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Question_Wrapper from '../components/Question_Input';
import Btn from '../components/Button/Btn';
import Footer from '../components/Layout/Footer/Footer';

const Question = () => {
  const [title, setTitle] = useState();
  const [tags, setTags] = useState();

  const titleHandler = (e) => {
    let temp = e.target.value;
    setTitle(temp);
  };
  const tagsHandler = (e) => {
    let temp = e.target.value;
    setTags(temp);
  };

  console.log(title);
  console.log(tags);
  return (
    <>
      <Nav> </Nav>
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
            <Editor
              placeholder="내용을 입력해주세요."
              previewStyle="vertical" // 미리보기 스타일 지정
              height="550px" // 에디터 창 높이
              initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
              toolbarItems={[
                // 툴바 옵션 설정
                ['heading', 'bold', 'italic', 'strike'],
                ['hr', 'quote'],
                ['ul', 'ol', 'task', 'indent', 'outdent'],
                ['table', 'link'],
                ['code', 'codeblock'],
              ]}
            />
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
        ></Btn>
      </Question_Container>
      <Footer />
    </>
  );
};

const Question_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(239, 240, 241);
  height: 100vh;
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
