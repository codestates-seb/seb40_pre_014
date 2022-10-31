import React from 'react';
import styled from 'styled-components';

const Question_Wrapper = ({ subTitle, info }) => {
  return (
    <Question_Title>
      <h1 className="subTitle"> {subTitle} </h1>
      <span className="subTitleInfo">{info}</span>
    </Question_Title>
  );
};

const Question_Title = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Question_Wrapper;
