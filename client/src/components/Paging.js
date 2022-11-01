import { useState } from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';

const Paging = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Container>
      <Pagination
        activePage={page}
        itemsCountPerPage={15} // 한 페이지에 보여줄 아이템 갯수
        totalItemsCount={75} // 총 아이템 갯수
        pageRangeDisplayed={5} // 페이지 범위
        onChange={handlePageChange}
        prevPageText="Prev"
        nextPageText="Next"
      />
    </Container>
  );
};

const Container = styled.div`
  ul {
    display: flex;
    gap: 5px;
    justify-content: center;
    margin: 1rem;

    & > li:first-child {
      display: none;
    }
    & > li:nth-child(2) {
      width: 50px;
    }

    & > li:last-child {
      display: none;
    }

    & > li:nth-last-child(2) {
      width: 50px;
    }
    li.active {
      background-color: orange;
    }
  }
  li {
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border-radius: 3px;

    a {
      color: gray;
      text-decoration: none;
    }
    :hover {
      background-color: #cecbcb;
    }
  }
`;

export default Paging;
