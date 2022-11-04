import styled from 'styled-components';

export const SearchsContainer = styled.div`
  z-index: 3;
  width: 95%;
  background-color: #fff;
  position: absolute;
  top: 45px;
  border: 2px solid;
  padding: 15px 15px 0 15px;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 10px;
  box-shadow: 1px 2px 3px hsl(210, 8%, 85%);
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 920px) {
    min-width: 410px;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const SearchsWrap = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const SearchDiv = styled.div`
  width: 100%;
  padding-left: 10px;
`;

export const SearchDiv2 = styled.div`
  width: 100%;
  border-top: 1px rgba(0, 0, 0, 0.2) solid;
  display: flex;
  justify-content: space-between;
`;

export const SearchsData = styled.li`
  padding: 10px 8px;
  font-size: 12px;

  z-index: 4;
  letter-spacing: 2px;
  position: relative;
`;

export const SearchHelp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #379fef;
  width: 90px;
  height: 18px;
  font-size: 10px;
  cursor: pointer;
  padding: 6.6px;
  font-weight: bold;
  margin-right: 10px;
  :hover {
    color: #cae8ff;
  }
`;
