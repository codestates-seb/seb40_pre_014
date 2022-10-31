import React from 'react';
import dummyTags from '../../../static/dummyData';
import { TagBar } from './Tag.style';

const Tag = () => {
  return (
    <TagBar>
      <header>Related Tags</header>
      <ul>
        {dummyTags.map((tag) => (
          <button key={tag.id}>{tag.name}</button>
        ))}
      </ul>
    </TagBar>
  );
};

export default Tag;
