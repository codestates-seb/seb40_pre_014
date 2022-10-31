import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Layout/Nav/Nav';
import { useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Question_Wrapper from '../components/Question_Input';

// const onChange = () => {
//   const data = editorRef.current.getInstance().getHTML();
//   setContent(data);
//   const dataWithoutTag = data.replace(
//     /<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/gi,
//     ''
//   );
//   setLengthContent(dataWithoutTag.length);
// };

const Question = () => {
  const [title, setTitle] = useState();

  const titleHandler = (e) => {
    let temp = e.target.value;
    setTitle(temp);
  };

  console.log(title);
  return (
    <>
      <Nav> </Nav>
      <Question_Container>
        <Question_Main>
          <Question_Wrapper
            subTitle={'Title'}
            info={
              'Be specific and imagine you’re asking a question to another person.'
            }
          >
            <Question_Input
              onChange={titleHandler}
              placeholder="e.g Is there R function for finding the index of an element in a vector?"
            />
          </Question_Wrapper>
          <Question_Body>
            <h1 className="subTitle"> Body </h1>
            <span className="subTitleInfo">
              Include all the information someone would need to answer your
              question
            </span>
            <Editor
              placeholder="내용을 입력해주세요."
              previewStyle="vertical" // 미리보기 스타일 지정
              height="300px" // 에디터 창 높이
              initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
              toolbarItems={[
                // 툴바 옵션 설정
                ['heading', 'bold', 'italic', 'strike'],
                ['hr', 'quote'],
                ['ul', 'ol', 'task', 'indent', 'outdent'],
                ['table', 'link'],
                ['code', 'codeblock'],
              ]}
            ></Editor>
          </Question_Body>
        </Question_Main>
      </Question_Container>
    </>
  );
};

const Question_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(239, 240, 241);
`;

const Question_Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 900px;
  width: 870px;
  margin-top: 200px;
  padding: 20px;
  border-radius: 5px;
  background: white;
  box-shadow: rgb(128, 128, 128) 0px 0px 3px 0px;

  .subTitle {
    font-weight: 500;
    font-size: 20px;
  }

  .subTitleInfo {
    font-size: 13px;
    font-weight: 350;
    color: #525960;
    margin: 5 px 0px 5px 0px;
    background: #eee;
    width: 100%;
  }
`;

const Question_Input = styled.input`
  height: 25px;
  border: 1px solid rgb(178, 183, 188);
  border-radius: 3px;
  font-size: 13.3px;
  padding: 8px 10px 8px 10px;
  margin-top: 10px;
`;

const Question_Body = styled.div`
  width: 854px;
  height: 607px;
  margin-top: 20px;
`;
export default Question;
