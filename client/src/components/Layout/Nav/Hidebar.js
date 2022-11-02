import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const ProfileContainer = styled.div`
  z-index: 3;
  width: 100%;
  justify-content: space-between;
  background-color: #fff;
  position: absolute;
  top: 45px;
  border: 2px solid;
  padding: 15px 15px 15px 15px;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 10px;
  box-shadow: 1px 2px 3px hsl(210, 8%, 85%);
  display: flex;
  flex-direction: column;
`;

export const ProfileWrap = styled.ul`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProfileDiv = styled.div`
  margin-top: 20px;
`;

export const Container = styled.div``;

export const LeftBar = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  border: 2px solid #e3e5e7;
  top: 55px;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  @media screen and (max-width: 680px) {
    max-width: 100%;
  }
  @media screen and (min-width: 580px) {
    display: none;
  }

  ul {
    .A {
      background-color: #f1f2f3;
      color: #000;
      font-weight: 600;
      border-right: 2px solid #f27622;
      cursor: pointer;
    }
  }
  li {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0 10px 0 25px;
    height: 40px;
    color: #666d72;
    .icon {
      display: flex;
      position: relative;
    }
  }
  a {
    text-decoration: none;
    color: #666d72;
  }
  div {
    display: flex;
  }
  li:hover {
    color: #000;
    font-weight: 600;
  }
`;

//아이콘
export const QuestionIcon = styled(FaGlobeAmericas)`
  width: 13px;
  height: 14px;
  position: absolute;
  left: -35%;
`;

export const LinkBox = styled(Link)`
  text-decoration: none;
`;

export const PublicBox = styled.div`
  padding: 0 0 5px 5px;
`;
