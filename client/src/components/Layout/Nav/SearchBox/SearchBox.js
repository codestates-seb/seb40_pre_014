import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { Search, SearchContainer, SearchIcon } from './SearchBox.style';
import {
  SearchsData,
  SearchsWrap,
  SearchsContainer,
  SearchDiv,
  SearchDiv2,
  SearchHelp,
} from './Searchs';
import Btn from '../../../Button/Btn';
import { LinkBox } from '../../Main/Main.style';

const SearchBox = () => {
  const [searchs, setSearchs] = useState(false);
  const searchModalRef = useRef();

  const handleModal = () => {
    setSearchs(!searchs);
  };

  const handleClickOutside = ({ target }) => {
    if (searchs && !searchModalRef.current.contains(target)) setSearchs(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });
  //defendency array 넣지마세요!

  return (
    <SearchContainer>
      <SearchIcon />
      <Search
        type="text"
        placeholder="Search..."
        onClick={handleModal}
        ref={searchModalRef}
      />
      {searchs && (
        <SearchsContainer>
          <SearchsWrap>
            <SearchDiv>
              <SearchsData>[tag] search within a tag</SearchsData>
              <SearchsData>user:1234 search by author</SearchsData>
              <SearchsData>words here exact phrase</SearchsData>
              <SearchsData>collective: Name collective content</SearchsData>
            </SearchDiv>
            <SearchDiv>
              <SearchsData>answer:0 unanswered questions</SearchsData>
              <SearchsData>score:3 posts with a 3+ score</SearchsData>
              <SearchsData>is : questions type of post</SearchsData>
              <SearchsData>isaccepted:yes search within status</SearchsData>
            </SearchDiv>
          </SearchsWrap>
          <SearchsWrap>
            <SearchDiv2>
              <SearchsData>
                <LinkBox>
                  <Btn
                    text={'Ask Question'}
                    textColor={'hsl(205,47%,42%);'}
                    backColor={'hsl(205,46%,92%);'}
                    width={'100px'}
                    height={'18px'}
                    fontSize={'10px'}
                    hoverColor={'#B3D3EA'}
                    cursorPointer={'pointer'}
                    padding={'6.6px'}
                    border={'1px solid hsl(205,41%,63%) '}
                  ></Btn>
                </LinkBox>
              </SearchsData>
              <SearchsData>
                <SearchHelp>Search help</SearchHelp>
              </SearchsData>
            </SearchDiv2>
          </SearchsWrap>
        </SearchsContainer>
      )}
    </SearchContainer>
  );
};

export default SearchBox;
