import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchContainer = styled.div`
  width: 56em;
  height: 30px;
  margin: -5px 0 0 10px;
  position: relative;
  border: 0;
`;

export const Search = styled.input`
  border: 0;
  padding-left: 30px;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  outline: solid 1px silver;
  border-radius: 3px;
  position: relative;
`;

export const SearchIcon = styled(FaSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20%;
  left: 1%;
  color: silver;
`;
