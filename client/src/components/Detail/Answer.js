import React from 'react';
import styled from 'styled-components';
import Detail_User from './Detail_User';
import VoteBtn from './VoteBtn';
import { Viewer } from '@toast-ui/react-editor';

const Answer = ({ img, content, voteCount, nickname }) => {
  return (
    <>
      <Answer_Container>
        <Answer_Content>
          <VoteBtn vote={voteCount} />
          {content && <Viewer initialValue={content} />}
          <Detail_User img={img} nickName={nickname} />
        </Answer_Content>
      </Answer_Container>
    </>
  );
};

const Answer_Container = styled.div`
  display: flex;
  height: 150px;
  position: relative;
  margin-top: 20px;
  border-bottom: 1px solid #e3e5e7;
`;

const Answer_Content = styled.div`
  display: flex;
  align-items: start;
  width: 1100px;
  height: 150px;
  padding: 10px;
  > span {
    font-size: 13px;
    margin-bottom: 40px;
  }
`;

export default Answer;
