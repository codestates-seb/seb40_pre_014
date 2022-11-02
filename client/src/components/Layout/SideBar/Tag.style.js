import styled from 'styled-components';

export const TagBar = styled.div`
  header {
    font-size: 15px;
    margin: 10px 0;
  }
`;

export const Btag = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-sizing: content-box;
`;

export const Mtag = styled.span`
  margin-right: 5px;
  background: rgb(221, 233, 242);
  border-radius: 3px;
  color: #39739d;
  padding: 3px;
  font-size: 13px;
  display: flex;
  width: fit-content;
`;
