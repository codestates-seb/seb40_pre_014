import React from 'react';
import { Search, SearchContainer, SearchIcon } from './SearchBox.style';

const SearchBox = () => {
  return (
    <SearchContainer>
      <Search type="text" placeholder="Search..." />
      <SearchIcon />
    </SearchContainer>
  );
};

export default SearchBox;
