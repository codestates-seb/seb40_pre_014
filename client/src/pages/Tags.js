/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import TagTitle from '../components/Tags/TagTitle';
import TagList from '../components/Tags/TagList';
// import TagDummy from '../components/Tags/TagDummy';
import { useState, useEffect, useLayoutEffect } from 'react';
import Paging from '../components/Paging';
import LeftSide from '../components/Layout/SideBar/LeftSide';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { pageStates } from '../states/page';

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [AllTags, setAllTags] = useState(0);
  const [currentPage, setCurrentPage] = useRecoilState(pageStates);

  const getTags = async () => {
    const res = await axios.get(
      `http://3.38.108.228:8080/tags/?page=1&size=90&sort=tagId`,
    );
    console.log(res.data);
    return res.data;
  };

  const handlepage = async () => {
    const res = await axios.get(
      `http://3.38.108.228:8080/tags/?page=${currentPage}&size=90&sort=tagId`,
    );
    return res.data;
  };

  useEffect(() => {
    getTags().then((el) => {
      setAllTags(el.pageInfo.totalElements);
      setTags(el.data);
    });
  }, []);

  useLayoutEffect(() => {
    handlepage().then((el) => setTags(el.data));
  }, [currentPage]);

  const count = AllTags;
  console.log(count);

  return (
    <BigBox>
      <MidBox>
        <LeftSide />
        <Container>
          <TagTitle tags={tags} setTags={setTags} getTags={getTags} />
          <TagList tags={tags} />
          <Paging count={count} onClick={handlepage} abc={100} />
        </Container>
      </MidBox>
    </BigBox>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .btn {
    margin-top: 300px;
  }
`;

const BigBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  //nav 높이만큼 패딩 해줘야 side바 border 안 끊김
  padding-top: 50px;
`;

const MidBox = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 420px);
  max-width: 1300px;
  display: flex;
`;

export default Tags;
