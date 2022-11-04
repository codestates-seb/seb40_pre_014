import React from 'react';
import styled from 'styled-components';

const VoteBtn = ({ vote, IncreaseVote, DecreaseVote }) => {
  return (
    <>
      <Btn_Container>
        <Vote_Wrapper>
          <VoteUp_btn onClick={IncreaseVote}></VoteUp_btn>
          <span> {vote} </span>
          <VoteDown_btn onClick={DecreaseVote}></VoteDown_btn>
        </Vote_Wrapper>
      </Btn_Container>
    </>
  );
};

const Btn_Container = styled.div`
  display: flex;
`;

const Vote_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30px;
  height: 100px;

  > span {
    font-size: 18px;
    text-align: center;
    margin: 15px 0px;
  }
`;

const VoteUp_btn = styled.div`
  width: 0;
  height: 0;
  border-bottom: 17px solid rgb(177, 183, 188);
  border-top: 17px solid transparent;
  border-left: 17px solid transparent;
  border-right: 17px solid transparent;
`;
const VoteDown_btn = styled.div`
  width: 0;
  height: 0;
  border-bottom: 17px solid transparent;
  border-top: 17px solid rgb(177, 183, 188);
  border-left: 17px solid transparent;
  border-right: 17px solid transparent;
`;

export default VoteBtn;
