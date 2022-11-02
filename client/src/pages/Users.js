import React, { useState } from 'react';
import styled from 'styled-components';
import User from '../components/User';
import dummyUsers from '../static/dummyUsers';
import SortTab from '../components/Button/SortTab';
import LeftSide from '../components/Layout/SideBar/LeftSide';
// import { MainBox } from '../components/Layout/Main/Main.style';

const Users = () => {
  const [users, setUsers] = useState(dummyUsers);

  const clickhandle = () => {
    let sort = dummyUsers.sort((a, b) => {
      let x = a.name.toLocaleLowerCase();
      let y = b.name.toLocaleLowerCase();

      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
    });
    setUsers([...sort]);
  };

  const datehandle = () => {
    let sort = dummyUsers.sort((a, b) => {
      return new Date(a.createAt) - new Date(b.createAt);
    });
    setUsers([...sort]);
  };

  const userSearch = (e) => {
    const filterUser = [];
    dummyUsers.filter((user) => {
      user.name.includes(e.target.value) ? filterUser.push(user) : null;
    });

    setUsers(filterUser);
  };

  return (
    <LayoutBox>
      <MiddleBox>
        <LeftSide />
        <UserContainer>
          <h1> Users </h1>
          <FilterButtonWrap>
            <FilterInput
              onChange={userSearch}
              placeholder="Filter by user"
            ></FilterInput>
            <SortTab
              funcprop={clickhandle}
              funcprop2={datehandle}
              text={'Name'}
              text2={'Newest'}
            />
          </FilterButtonWrap>
          <User users={users} />
        </UserContainer>
      </MiddleBox>
    </LayoutBox>
  );
};

const UserContainer = styled.div`
  width: 100%;
  padding: 20px;
  > h1 {
    font-size: 27px;
    margin-bottom: 30px;
  }
`;

const FilterInput = styled.input`
  width: 190px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid rgb(177, 183, 188);
  margin-bottom: 5px;
`;
const LayoutBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  //nav 높이만큼 패딩 해줘야 side바 border 안 끊김
  padding-top: 50px;
`;

const MiddleBox = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 420px);
  max-width: 1300px;
  display: flex;
`;

const FilterButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Users;

// export const MainBox = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: center;
//   //nav 높이만큼 패딩 해줘야 side바 border 안 끊김
//   padding-top: 50px;
// `;
