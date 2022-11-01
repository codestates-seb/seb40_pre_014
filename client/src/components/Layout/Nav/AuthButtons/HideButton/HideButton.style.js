import styled from 'styled-components';
import { AiOutlineDropbox, AiTwotoneTrophy } from 'react-icons/ai';
import { MdHelp } from 'react-icons/md';
import { BsFillChatRightTextFill } from 'react-icons/bs';

export const HideContainer = styled.div`
  display: flex;
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 47px;
  padding: 0 8px;
  &:hover {
    cursor: pointer;
    background-color: #e3e6e8;
  }
`;

export const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const IconOne = styled(AiOutlineDropbox)`
  width: 20px;
  height: 18px;
`;

export const IconTwo = styled(AiTwotoneTrophy)`
  width: 20px;
  height: 18px;
`;

export const IconThree = styled(MdHelp)`
  width: 20px;
  height: 18px;
`;

export const IconFour = styled(BsFillChatRightTextFill)`
  width: 20px;
  height: 18px;
`;

export const IconDiv = styled.div`
  width: 40px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #e3e6e8;
  }
`;

export const IconBox = styled.div`
  padding: 0 10px;
  display: flex;
`;
