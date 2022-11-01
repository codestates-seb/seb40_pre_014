import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchContainer = styled.div`
  width: 45em;
  height: 25px;
  display: flex;
  position: relative;
  outline: solid 1px silver;
  border-radius: 3px;
  font-size: 15px;
  background-color: #ffffff;
  align-items: center;
  margin-left: 5px;
`;
export const SearchIcon = styled(FaSearch)`
  display: flex;
  width: 20px;
  padding: 0 5px;
  color: silver;
  cursor: pointer;
`;

export const Search = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 0;
  width: 100%;
  height: 100%;
  outline: none;
  :focus {
    outline: none;
    border-color: 2px rgb(0, 25, 244, 0.6);
  }
`;
