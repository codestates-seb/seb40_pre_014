import React from 'react';
import { RightBar, PenIcon, CommentIcon } from './RightSide.style';

const RightSide = () => {
  return (
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
  );
};

export default RightSide;
