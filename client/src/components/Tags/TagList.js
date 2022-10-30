import styled from 'styled-components';

const TagList = ({ tags }) => {
  console.log(tags);
  return (
    <Container>
      {tags.map((item) => (
        <Tagbox key={item.id}>
          <div>
            <Tag>{item.name}</Tag>
            <p>{item.content}</p>
            <span style={{ fontSize: '12px', color: 'gray' }}>
              {item.questions} questions
            </span>
          </div>
        </Tagbox>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, auto));
  gap: 12px;
`;

const Tagbox = styled.div`
  padding: 20px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 13px;
    margin-top: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.2em;
    height: 4.8em; // 1.2em * 4줄
    margin-bottom: 1rem;
  }
`;

const Tag = styled.button`
  color: '#39739d';
  background-color: '#e1ecf4';
  padding: 4px 6px;
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
`;

export default TagList;
