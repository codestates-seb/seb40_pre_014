/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import TagTitle from '../components/Tags/TagTitle';
import TagList from '../components/Tags/TagList';
import { useState, useEffect } from 'react';
import Paging from '../components/Paging';
import LeftSide from '../components/Layout/SideBar/LeftSide';
import axios from 'axios';
import { useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';
import { pageStates } from '../states/page';

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [num, setNum] = useState(0);
  const [AllTags, setAllTags] = useState(0);
  const [currentPage, setCurrentPage] = useRecoilState(pageStates);
  const abc = [];
  const [efg, setEfg] = useState([]);

  const getTags = async () => {
    const res = await axios.get(`/api/tags/?page=1&size=90&sort=tagId`);
    return res.data;
  };
  const handleFilter = (e) => {
    setSearchValue(e.target.value);
    setNum(e.target.value.length);
  };

  const handlepage = async () => {
    const res = await axios.get(
      `/api/tags/?page=${currentPage}&size=90&sort=tagId`,
    );
    return res.data;
  };

  //랜더링 시 기본 화면
  useEffect(() => {
    getTags().then((el) => {
      setTags(el.data);
      setAllTags([...el.pageInfo.totalElements]);
    });
  }, []);
  //새로운 렌더링 조건
  useLayoutEffect(() => {
    if (num === 0) {
      getTags().then((el) => setTags(el.data));
    } else {
      getTags().then((el) => setEfg(el.data));
      efg.filter((el) =>
        el.tagName.includes(searchValue) ? abc.push(el) : '',
      );
    }
    setTags([...abc]);
  }, [num, searchValue]);

  useEffect(() => {
    handlepage().then((el) => setTags(el.data));
    window.scrollTo(0, 0);
  }, [currentPage]);

  const count = AllTags;

  return (
    <>
      <BigBox>
        <MidBox>
          <LeftSide />
          <Container>
            <TagTitle
              tags={tags}
              setTags={setTags}
              setSearchValue={setSearchValue}
              setNum={setNum}
              handleFilter={handleFilter}
            />
            <TagList tags={tags} />
            <Paging count={count} onClick={handlepage} abc={100} />
          </Container>
        </MidBox>
      </BigBox>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  .btn {
    margin-top: 300px;
  }
`;

const BigBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding-top: 50px;
  overflow-x: hidden;
`;

const MidBox = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 420px);
  max-width: 1300px;
  display: flex;
`;

export default Tags;
