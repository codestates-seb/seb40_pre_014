import React from 'react';
import { LeftBar, QuestionIcon } from './LeftSide.style';
import ad from '../../../assets/images/ad.png';
import { Link } from 'react-router-dom';

const LeftSide = () => {
  return (
    <LeftBar>
      <ul>
        <QuestionIcon />
        <li>
          <Link to="/">Questions</Link>
        </li>

        <li>
          <Link to="/tags">Tags</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
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
