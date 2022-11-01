import React from 'react';
import { LeftBar, QuestionIcon, LinkBox, PublicBox } from './LeftSide.style';
import Ad from './Ad';
import { NavLink } from 'react-router-dom';

const LeftSide = () => {
  return (
    <LeftBar>
      <ul>
        <PublicBox>Public</PublicBox>
        <li className="home">
          <div className="icon">
            <QuestionIcon />
            <LinkBox to="/">Questions</LinkBox>
          </div>
        </li>
        <li>
          <NavLink to="/tags">Tags</NavLink>
        </li>
        <li>
          <LinkBox to="/users">Users</LinkBox>
        </li>
        <Ad />
      </ul>
    </LeftBar>
  );
};

export default LeftSide;
