import React from 'react';
import { LeftBar } from './LeftSide.style';
import ad from '../../../assets/images/ad.png';
import { Link } from 'react-router-dom';

const LeftSide = () => {
  return (
    <LeftBar>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Questions</li>
        <li>Tags</li>
        <li>Users</li>
        <li className="li-title">Stack Overflow for Teams</li>
        <span>Start collaborating and sharing organizational knowledge.</span>
        <img src={ad} alt="" />
        <button>Create free Team</button>
      </ul>
    </LeftBar>
  );
};

export default LeftSide;
