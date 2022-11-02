import React from 'react';
import { LeftBar, QuestionIcon, LinkBox, PublicBox } from './LeftSide.style';
import Ad from './Ad';
import { useRecoilState } from 'recoil';
import { TapStates } from '../../../states/Tap';

const LeftSide = () => {
  const [tap, setTap] = useRecoilState(TapStates);

  // const [one, setOne] = useState();
  // const [two, setTwo] = useState(false); // eslint-disable-line no-unused-vars
  // const [three, setThree] = useState(false); // eslint-disable-line no-unused-vars

  // const onHandle = () => {
  //   setOne(true);
  //   setTwo(false);
  //   setThree(false);
  // };
  // const onHandle2 = () => {
  //   setOne(false);
  //   setTwo(true);
  // };

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
