import styled from 'styled-components';

const TagList = ({ tags }) => {
  return (
    <Container>
      {tags.map((tag) => (
        <Tagbox key={tag.tagId}>
          <div>
            <Tag>{tag.tagName}</Tag>
            <div style={{ fontSize: '12px', color: 'gray', marginTop: '1rem' }}>
              {tag.count} questions
            </div>
          </div>
        </Tagbox>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, auto));
  gap: 12px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(4, minmax(0, auto));
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, auto));
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, auto));
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, minmax(0, auto));
  }
`;

const Tagbox = styled.div`
  padding: 15px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Tag = styled.button`
  display: flex;
  color: #39739d;
  background-color: #e1ecf4;
  border-radius: 3px;
  font-size: 13px;
  cursor: pointer;
  display: inline-block;
  &:hover {
    background-color: '#D0E3F1';
  }
  background-color: rgb(225, 236, 244);
  border: none;
  color: rgb(57, 115, 157);
  @media screen and (max-width: 580px) {
    font-size: 15px;
  }
`;

export default TagList;
