import React from 'react';
import { LeftBar } from './LeftSide.style';
import ad from '../../../assets/images/ad.png';

const LeftSide = () => {
  return (
    <LeftBar>
      <ul>
        <li>Home</li>
        <li>Questions</li>
        <li>Tags</li>
        <li>Companies</li>
        <li className="li-title">COLLECTIVES</li>
        <li>Explore Collectives</li>
        <li className="li-title">TEAMS</li>
        <img src={ad} alt="" />
        <button>Create free Team</button>
      </ul>
    </LeftBar>
  );
};

export default LeftSide;
