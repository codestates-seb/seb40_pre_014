import styled from 'styled-components';
import TagTitle from '../components/Tags/TagTitle';
import TagList from '../components/Tags/TagList';
import LeftSide from '../components/Layout/SideBar/LeftSide';
import Footer from '../components/Layout/Footer/Footer';
import Nav from '../components/Layout/Nav/Nav';
import TagDummy from '../components/Tags/TagDummy';
import { useState } from 'react';

const Tags = () => {
  const [tags, setTags] = useState(TagDummy);

  return (
    <>
      <Nav />
      <Container>
        <LeftSide />
        <section>
          <TagTitle tags={tags} setTags={setTags} />
          <TagList tags={tags} />
        </section>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  .btn {
    margin-top: 300px;
  }
`;

export default Tags;
