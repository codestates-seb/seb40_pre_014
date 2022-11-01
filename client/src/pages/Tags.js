import styled from 'styled-components';
import TagTitle from '../components/Tags/TagTitle';
import TagList from '../components/Tags/TagList';
import LeftSide from '../components/Layout/SideBar/LeftSide';
import Footer from '../components/Layout/Footer/Footer';
import Nav from '../components/Layout/Nav/Nav';
import TagDummy from '../components/Tags/TagDummy';
import { useState } from 'react';
import Paging from '../components/Paging';

const Tags = () => {
  const [tags, setTags] = useState(TagDummy);

  return (
    <div>
      <Nav />
      <Container>
        <LeftSide />
        <section style={{ width: '100%' }}>
          <TagTitle tags={tags} setTags={setTags} />
          <TagList tags={tags} />
        </section>
      </Container>
      <Paging />
      <Footer />
    </div>
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
