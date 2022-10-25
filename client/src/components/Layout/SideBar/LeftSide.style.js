import styled from 'styled-components';

export const LeftBar = styled.div`
  position: sticky;
  top: 56px;
  display: flex;
  align-items: center;
  width: 184px;
  background: #ffffff;
  margin: 0;
  padding-top: 1.5rem;
  padding-bottom: 4rem;
  li {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 16px;
    width: 100%;
    height: 40px;
    color: #666d72;
  }
  .li-title {
    display: flex;
    justify-content: space-between;
    width: 170px;
    font-size: 13px;
  }
  button {
    background-color: orange;
    color: white;
    border-radius: 5px;
    border: none;
  }
`;
