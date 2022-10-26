import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const LeftBar = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  border-right: 1px solid #e3e5e7;
  margin-left: 10%;
  li {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 40px;
    width: 75%;
    height: 40px;
    color: #666d72;
    #icon {
      display: flex;
      position: relative;
    }
  }
  a {
    text-decoration: none;
    color: #666d72;
  }
  div {
    padding-left: 30px;
    display: flex;
    font-size: 13px;
  }
  li:hover {
    background-color: #ddd;
    color: #000;
    border-right: 2px solid #f27622;
  }
  span {
    font-size: 12px;
    display: flex;
    padding-left: 30px;
    color: #666d72;
  }
  .team {
    background-color: orange;
    color: white;
    border-radius: 3px;
    border: none;
    margin-left: 30px;
  }
  img {
    padding-left: 30px;
    padding-top: 10px;
  }
`;

export const QuestionIcon = styled(FaGlobeAmericas)`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 6.5%;
  left: 10%;
  color: black;
`;

export const LinkBox = styled(Link)``;
export const PublicBox = styled.div`
  padding-bottom: 5px;
`;
