import styled from 'styled-components';

const SortTab = ({ funcprop, funcprop2, text, text2 }) => {
  return (
    <>
      <FilterBtn>
        <button onClick={funcprop}>{text}</button>
        <button onClick={funcprop2}>{text2}</button>
      </FilterBtn>
    </>
  );
};

const FilterBtn = styled.div`
  > button {
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
`;

export default SortTab;
