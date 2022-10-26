import React from 'react';
import { LeftBar, QuestionIcon } from './LeftSide.style';
import ad from '../../../assets/images/ad.png';

const LeftSide = () => {
  return (
    <LeftBar>
      <ul>
        <QuestionIcon />
        <li>Questions</li>
        <li>Tags</li>
        <li>Users</li>
        <div>Stack Overflow for Teams</div>
        <span>Start collaborating and sharing organizational knowledge.</span>
        <img src={ad} alt="" />
        <button>Create free Team</button>
      </ul>
    </LeftBar>
  );
};

export default LeftSide;
