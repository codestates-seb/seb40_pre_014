import React from 'react';

import { RightBar } from './RightSide.style';

const RightSide = () => {
  return (
    <RightBar>
      <header>The Overflow Blog</header>
      <ul>
        <li>Introducing the Overflow Offline project</li>
        <li>
          He helped build .NET and VS Code — Now’s he working on Web3 (Ep. 499)
        </li>
      </ul>
      <header>Featured on Meta</header>
      <ul>
        <li>The 2022 Community-a-thon has begun!</li>
        <li>Mobile app infrastructure being decommissioned</li>
        <li>Collectives Update: Recognized Members, Articles, and GitLab</li>
        <li>The [script] tag is being burninated</li>
        <li>Staging Ground Workflow: Canned Comments</li>
      </ul>
    </RightBar>
  );
};

export default RightSide;
