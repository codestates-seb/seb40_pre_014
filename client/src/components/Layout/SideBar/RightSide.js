import React from 'react';
import styled from 'styled-components';
import { RightBar, PenIcon, CommentIcon } from './RightSide.style';

const RightSide = () => {
  return (
    <RightSideBox>
      <RightBar>
        <header>The Overflow Blog</header>
        <ul>
          <li>
            <RightDiv>
              <RightSpan>
                <PenIcon />
              </RightSpan>
              Introducing the Overflow Offline project
            </RightDiv>
          </li>
          <li>
            <RightDiv>
              <RightSpan>
                <PenIcon />
              </RightSpan>
              He helped build .NET and VS Code(Ep. 499)
            </RightDiv>
          </li>
        </ul>
        <header>Featured on Meta</header>
        <ul>
          <li>
            <RightDiv>
              <RightSpan>
                <CommentIcon />
              </RightSpan>
              The 2022 Community-a-thon has begun!
            </RightDiv>
          </li>
          <li>
            <RightDiv>
              <RightSpan>
                <CommentIcon />
              </RightSpan>
              Mobile app infrastructure
            </RightDiv>
          </li>
          <li>
            <RightDiv>
              <RightSpan>
                <CommentIcon />
              </RightSpan>
              Staging Ground Workflow
            </RightDiv>
          </li>
          <li>
            <RightDiv>
              <RightSpan>
                <CommentIcon />
              </RightSpan>
              The [script] tag is being burninated
            </RightDiv>
          </li>
          <li>
            <RightDiv>
              <RightSpan>
                <CommentIcon />
              </RightSpan>
              Staging Ground Workflow: Canned Comments
            </RightDiv>
          </li>
        </ul>
      </RightBar>
    </RightSideBox>
  );
};

export default RightSide;

const RightSideBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 2%;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const RightDiv = styled.div`
  display: flex;
  justify-content: left;
`;

const RightSpan = styled.span`
  display: flex;
  justify-content: center;
  padding-top: 3px;
`;
