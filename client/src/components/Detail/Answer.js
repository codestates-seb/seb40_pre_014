import React from 'react';
import styled from 'styled-components';
import Detail_User from './Detail_User';
import VoteBtn from './VoteBtn';

const Answer = ({ img, content, voteCount, nickname }) => {
  return (
    <>
      <Answer_Container>
        <VoteBtn vote={voteCount} />
        <Answer_Content>
          <span> {content} </span>
        </Answer_Content>
        <Detail_User img={img} nickName={nickname} />
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
  flex-direction: column;
  width: 1100px;
  height: 150px;
  padding: 10px;
  > span {
    font-size: 13px;
    margin-bottom: 40px;
  }
`;

export default Answer;
