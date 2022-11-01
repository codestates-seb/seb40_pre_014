import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import TagDummy from './TagDummy';
import SortTab from '../Button/SortTab';

const TagTitle = ({ tags, setTags }) => {
  const clickpopular = () => {
    let sort = tags.sort((a, b) => {
      return a.questions < b.questions ? 1 : -1;
    });
    console.log(sort);
    setTags([...sort]);
  };

  const clickname = () => {
    let sort = tags.sort((a, b) => {
      return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
    });
    console.log(sort);
    setTags([...sort]);
  };

  const tagsearch = (event) => {
    const filterTag = [];

    TagDummy.filter((tag) => {
      tag.name.includes(event.target.value) ? filterTag.push(tag) : null;
    });

    console.log(filterTag);
    setTags([...filterTag]);
  };

  return (
    <Container>
      <h1>Tags</h1>
      <p>
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </p>
      <div className="between">
        <SearchIcon />
        <TextInput placeholder="Filter by tag name" onChange={tagsearch} />
        <SortTab
          funcprop={clickpopular}
          funcprop2={clickname}
          text={'Popular'}
          text2={'Name'}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
  p {
    width: 630px;
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 16px;
  }
  h1 {
    font-size: 27px;
    margin-top: 3rem;
    margin-bottom: 24px;
  }
  .between {
    display: flex;
    justify-content: space-between;
  }
  .filterBtn {
    button {
      padding: 0.8em;
      color: rgb(82, 89, 96);
      background-color: #f8f9f9;
      border: 1px solid #9fa6ad;
      margin-left: -2px;
      font-size: 12px;
      cursor: pointer;
      &:focus {
        background-color: rgb(227, 230, 232);
      }
      border-radius: 3px;
    }
  }
`;

const TextInput = styled.input`
  border: 1px solid silver;
  border-radius: 3px;
  width: 10rem;
  height: 2rem;
  &:focus {
    outline: 1px solid #59a4de;
  }
  padding-left: 2rem;
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  margin: 7px;
  margin-left: 5px;
  width: 20px;
  height: 20px;
  color: silver;
`;

export default TagTitle;
