import styled from 'styled-components';

export const ADBox = styled.div`
  display: flex;
  width: 150px;
  flex-direction: column;
  padding: 10px;
  margin: 5px 0 0 0;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-right: none;
`;

export const ADtitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: rgb(0, 0, 0, 80%);
`;

export const ADsubtitle = styled.span`
  font-size: 10px;
  display: flex;
  text-align: left;
  color: #666d72;
`;

export const ADImg = styled.img`
  padding-top: 10px;
`;
