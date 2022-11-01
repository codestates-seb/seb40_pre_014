import React from 'react';
import styled from 'styled-components';

const Detail_User = ({ img, nickName }) => {
  return (
    <>
      <User_Container>
        <Img_Wrapper>
          <img alt="" src={img} />
        </Img_Wrapper>
        <span> {nickName} </span>
      </User_Container>
    </>
  );
};

const User_Container = styled.div`
  display: flex;
  align-items: center;
  background: #d3ebf8;
  border-radius: 3px;
  width: 120px;
  height: 40px;
  padding: 5px, 7px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  color: #0074cc;
  font-size: 12px;
`;

const Img_Wrapper = styled.div`
  > img {
    width: 25px;
    height: 25px;
    object-fit: cover;
    border-radius: 5px;
    margin: 0px 5px;
  }
`;

export default Detail_User;
