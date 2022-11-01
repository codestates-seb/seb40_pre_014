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

  .subTitle {
    font-weight: 500;
    font-size: 20px;
  }

  .subTitleInfo {
    font-size: 13px;
    font-weight: 350;
    color: #525960;
    margin: 7px 0px 7px 0px;
    width: 100%;
  }
`;

export default Question_Wrapper;
