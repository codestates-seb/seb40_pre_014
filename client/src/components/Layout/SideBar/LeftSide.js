import React from 'react';
import { LeftBar, QuestionIcon, LinkBox, PublicBox } from './LeftSide.style';
import Ad from './Ad';
import { useRecoilState } from 'recoil';
import { TapStates } from '../../../states/Tap';

const LeftSide = () => {
  const [tap, setTap] = useRecoilState(TapStates);

  return (
    <LeftBar>
      <ul>
        <PublicBox>Public</PublicBox>
        <LinkBox to="/">
          <li
            className={tap.One ? 'A' : ''}
            role="presentation"
            onClick={() => setTap({ One: true, Two: false, Three: false })}
          >
            <div className="icon">
              <QuestionIcon />
              <div>Questions</div>
            </div>
          </li>
        </LinkBox>
        <LinkBox to="/tags">
          <li
            className={tap.Two ? 'A' : ''}
            role="presentation"
            onClick={() => setTap({ Two: true, One: false, Three: false })}
          >
            <div>Tags</div>
          </li>
        </LinkBox>
        <LinkBox to="/users">
          <li
            className={tap.Three ? 'A' : ''}
            role="presentation"
            onClick={() => setTap({ Three: true, One: false, Two: false })}
          >
            <div>Users</div>
          </li>
        </LinkBox>
        <Ad />
      </ul>
    </LeftBar>
  );
};

export default LeftSide;
