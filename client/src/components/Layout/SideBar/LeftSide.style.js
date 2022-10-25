import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';

export const LeftBar = styled.div`
  position: sticky;
  top: 56px;
  display: flex;
  align-items: center;
  width: 200px;
  background: #ffffff;
  margin: 0;
  padding-top: 3rem;
  padding-bottom: 4rem;
  li {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 30px;
    width: 80%;
    height: 40px;
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
  button {
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
  width: 20px;
  height: 20px;
  position: absolute;
  color: black;
  top: 17%;
`;
