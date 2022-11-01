import React from 'react';
import { LeftBar, QuestionIcon, PublicBox, LinkBox } from './LeftSide.style';
import Ad from './Ad';

const LeftSide = () => {
  return (
    <LeftBar>
      <ul>
        <PublicBox>Public</PublicBox>
        <LinkBox
          to={'/'}
          className={({ isActive }) => 'nav-link' + (isActive ? 'a' : '')}
        >
          <li>
            <div className="icon">
              <QuestionIcon />
              Question
            </div>
          </li>
        </LinkBox>

        <LinkBox
          to={'/tags'}
          className={({ isActive }) => 'nav-link' + (isActive ? 'a' : '')}
        >
          <li>Tags</li>
        </LinkBox>

        <LinkBox
          to={'/users'}
          className={({ isActive }) => 'nav-link' + (isActive ? 'a' : '')}
        >
          <li>Users</li>
        </LinkBox>
        <Ad />
      </ul>
    </LeftBar>
  );
};

export default LeftSide;
