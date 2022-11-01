import styled from 'styled-components';

export const HideContainer = styled.div`
  display: flex;
  > .on {
    background-color: #e3e6e8;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 47px;
  padding: 0 4px;
  margin: 0 0 0 4px;
  position: relative;
  &:hover {
    cursor: pointer;
    background-color: #e3e6e8;
  }
`;

export const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const ProfileContainer = styled.div`
  z-index: 3;
  width: 100%;
  justify-content: space-between;
  background-color: #fff;
  position: absolute;
  top: 45px;
  border: 2px solid;
  padding: 15px 15px 15px 15px;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 10px;
  box-shadow: 1px 2px 3px hsl(210, 8%, 85%);
  display: flex;
  flex-direction: column;
`;

export const ProfileWrap = styled.ul`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProfileDiv = styled.div`
  margin-top: 20px;
`;
