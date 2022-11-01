import React, { useState } from 'react';
import Footer from '../components/Layout/Footer/Footer';
import Nav from '../components/Layout/Nav/Nav';
import LeftSide from '../components/Layout/SideBar/LeftSide';
import styled from 'styled-components';
import User from '../components/User';
import dummyUsers from '../static/dummyUsers';
import SortTab from '../components/Button/SortTab';

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
    console.log(filterUser);
    setUsers(filterUser);
  };

  return (
    <>
      <Nav />
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
        <Footer />
      </LayoutBox>
    </>
  );
};

const UserContainer = styled.div`
  height: 1000px;
  width: 1100px;
  padding: 20px;
  > h1 {
    font-size: 27px;
    margin-bottom: 30px;
    margin-top: 80px;
  }
`;

const FilterInput = styled.input`
  width: 190px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid rgb(177, 183, 188);
  margin-bottom: 100px;
`;
const LayoutBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-top: 50px;
`;

const MiddleBox = styled.div`
  display: flex;
  width: 100%;
  margin: 0px 50%;
`;

const FilterButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
`;
export default Users;
