import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopLinkList = styled.ul`
  display: flex;
  margin-left: 10px;
  gap: 5px;
`;

export const TopLinks = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 2px;
  text-decoration: none;
  color: black;
`;

const TopList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 20px;
  width: 80px;
  height: 32px;
  font-size: 10px;
  transition: background-color 0.4s;
  &:hover {
    background-color: #dddd;
    cursor: pointer;
  }
`;

export const HideableList = styled(TopList)`
  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const Products = styled(TopList)`
  @media screen and (max-width: 980px) {
    font-size: 0.8rem;
  }
`;
