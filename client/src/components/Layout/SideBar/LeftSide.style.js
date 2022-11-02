import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

export const LeftBar = styled.div`
  display: flex;
  border-right: 1px solid #e3e5e7;
  //마진 쓰면 안 됨.
  padding: 100px 0 0 10px;
  box-sizing: border-box;
  @media screen and (max-width: 680px) {
    max-width: 100%;
  }
  @media screen and (max-width: 580px) {
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
    padding-left: 40px;
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
