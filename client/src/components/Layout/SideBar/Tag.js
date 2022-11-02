import React from 'react';
import dummyTags from '../../../static/dummyData';
import { TagBar, Mtag, Btag } from './Tag.style';

const Tag = () => {
  return (
    <TagBar>
      <header>Related Tags</header>
      <Btag>
        {dummyTags.map((tag) => (
          <Mtag key={tag.id}>{tag.name}</Mtag>
        ))}
      </Btag>
    </TagBar>
  );
};

export default Tag;
