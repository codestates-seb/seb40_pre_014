import React from 'react';
import { LeftBar, QuestionIcon, LinkBox, PublicBox } from './LeftSide.style';
import ad from '../../../assets/images/ad.png';

const LeftSide = () => {
  return (
    <LeftBar>
      <ul>
        <QuestionIcon />
        <PublicBox>Public</PublicBox>
        <li className="icon">
          <LinkBox to="/">Questions</LinkBox>
        </li>
        <li>
          <LinkBox to="/tags">Tags</LinkBox>
        </li>
        <li>
          <LinkBox to="/users">Users</LinkBox>
        </li>
        <div>Stack Overflow for Teams</div>
        <span>Start collaborating and sharing organizational knowledge.</span>
        <img src={ad} alt="" />
        <button className="team">Create free Team</button>
      </ul>
    </LeftBar>
  );
};

export default LeftSide;
