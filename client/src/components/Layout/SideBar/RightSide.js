import React from 'react';
import styled from 'styled-components';
import { RightBar, PenIcon, CommentIcon } from './RightSide.style';
import Tag from './Tag';

const RightSide = () => {
  return (
    <RightSideBox>
      <RightBar>
        <header>The Overflow Blog</header>
        <ul>
          <li>
            <PenIcon />
            Introducing the Overflow Offline project
          </li>
          <li>
            <PenIcon />
            He helped build .NET and VS Code(Ep. 499)
          </li>
        </ul>
        <header>Featured on Meta</header>
        <ul>
          <li>
            <CommentIcon />
            The 2022 Community-a-thon has begun!
          </li>
          <li>
            <CommentIcon />
            Mobile app infrastructure
          </li>
          <li>
            <CommentIcon />
            Staging Ground Workflow
          </li>
          <li>
            <CommentIcon />
            The [script] tag is being burninated
          </li>
          <li>
            <CommentIcon />
            Staging Ground Workflow: Canned Comments
          </li>
        </ul>
      </RightBar>
      <Tag />
    </RightSideBox>
  );
};

export default RightSide;

const RightSideBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 2%;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
