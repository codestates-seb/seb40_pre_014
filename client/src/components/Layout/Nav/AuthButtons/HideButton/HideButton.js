import React from 'react';
import {
  IconBox,
  IconOne,
  IconDiv,
  IconTwo,
  IconThree,
  IconFour,
} from './HideButton.style';

const HideButton = () => {
  return (
    <IconBox>
      <IconDiv>
        <IconOne />
      </IconDiv>
      <IconDiv>
        <IconTwo />
      </IconDiv>
      <IconDiv>
        <IconThree />
      </IconDiv>
      <IconDiv>
        <IconFour />
      </IconDiv>
    </IconBox>
  );
};

export default HideButton;
