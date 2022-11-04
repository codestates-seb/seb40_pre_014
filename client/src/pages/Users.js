import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import User from '../components/User';
import SortTab from '../components/Button/SortTab';
import LeftSide from '../components/Layout/SideBar/LeftSide';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const res = await axios.get(`http://3.38.108.228:8080/api/users`);
    return res.data;
  };

  useEffect(() => {
    getUser().then((el) => setUsers(el.content));
  }, []);

  const clickhandle = () => {
    let sort = users.sort((a, b) => {
      let x = a.nickName;
      let y = b.nickName;
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
    });
    setUsers([...sort]);
  };

  const defaulthandle = () => {
    getUser().then((el) => setUsers(el.content));
  };

  return (
    <LayoutBox>
      <MiddleBox>
        <LeftSide />
        <UserContainer>
          <h1> Users </h1>
          <FilterButtonWrap>
            <SortTab
              funcprop={clickhandle}
              funcprop2={defaulthandle}
              text={'Name'}
              text2={'UserId'}
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

const LayoutBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
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
  width: 100%;
  justify-content: flex-end;
`;
export default Users;
