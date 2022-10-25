import styled from 'styled-components';

export const RightBar = styled.div`
  width: 19rem;
  height: 23rem;
  margin-top: 50px;
  margin-right: 0;
  border: 1px solid hsl(47, 65%, 84%);
  background-color: hsl(47, 83%, 91%);
  color: rgb(59, 64, 69);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  header {
    padding: 12px 15px;
    border-bottom: 1px solid hsl(47, 65%, 84%);
    font-size: 15px;
  }

  ul {
    padding: 4px 15px;
    background-color: #faf5e6;
  }
  li {
    margin: 12px 0;
    font-size: 13px;
    list-style: inside;
  }
`;

export const RightSide2 = styled.div`
  background-color: white;
  width: 19rem;
  height: 23rem;
  margin-top: 50px;
  margin-right: 0;
  border: 1px solid gray;
  color: rgb(59, 64, 69);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  header {
    padding: 12px 15px;
    border-bottom: 1px solid #d6d9dc;
  }

  li {
    padding: 30px 15px;
  }
  span {
    font-size: 13px;
  }
  img {
    width: 40px;
  }
`;
