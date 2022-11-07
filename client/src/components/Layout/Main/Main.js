import React, { useEffect, useLayoutEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import Btn from '../../Button/Btn';
import {
  MainBox,
  MainMiniBox,
  MainFirstBox,
  ContentsBox,
  MainSecondBox,
  RigthSection,
  ContentsSection,
  MainMidBox,
  SectionUL,
  SectionLI,
  ContentLI,
  Tags,
  Tag,
  LinkBox,
  Name,
  Date,
  ProfileImg,
  ProfileAndDate,
  Contents,
} from './Main.style';
import RightSide from '../SideBar/RightSide';
import SortTab from '../../Button/SortTab';
import LeftSide from '../SideBar/LeftSide';
import axios from 'axios';
import Paging from '../../Paging';
import Img from '../../../assets/images/user.png';
import { useRecoilState } from 'recoil';
import { pageStates } from '../../../states/page';
import { Link, useNavigate } from 'react-router-dom';

const Main = () => {
  const [question, setQuestion] = useState([]);
  const [AllQuestion, setAllQuestion] = useState(0); // eslint-disable-line no-unused-vars
  const [currentPage, setCurrentPage] = useRecoilState(pageStates); // eslint-disable-line no-unused-vars
  const navigate = useNavigate();

  const clickVote = () => {
    let sort = question.sort((a, b) => {
      return b.voteCount - a.voteCount;
    });
    setQuestion([...sort]);
  };
  const clickNewest = () => {
    let sort = question.sort((a, b) => {
      return new Date(b.regDate) - new Date(a.regDate);
    });
    setQuestion([...sort]);
  };

  const getQuestion = async () => {
    const res = await axios.get(
      `/api/question/?page=1&size=15&sort=questionId`,
    );
    return res.data;
  };

  const handlepage = async () => {
    const res = await axios.get(
      `/api/question/?page=${currentPage}&size=15&sort=questionId`,
    );
    return res.data;
  };

  getQuestion();

  useEffect(() => {
    getQuestion().then((el) => {
      console.log(el);
      // setAllQuestion(el.pageInfo.totalElements);
      setQuestion([...el.data]);
    });
  }, []);

  useLayoutEffect(() => {
    handlepage().then((el) => setQuestion(el.data));
    window.scrollTo(0, 0);
  }, [currentPage]);

  const count = AllQuestion;

  const askQuestion = () => {
    navigate('/question');
  };

  return (
    <>
      <MainBox>
        <MainMidBox>
          <LeftSide />
          <MainMiniBox>
            <MainFirstBox>
              <h1>All Questions</h1>
              <LinkBox onClick={askQuestion}>
                <Btn
                  text={'Ask Question'}
                  backColor={'#0d8ae1'}
                  width={'90px'}
                  height={'35px'}
                  fontSize={'13px'}
                  hoverColor={'#0069c5'}
                  cursorPointer={'pointer'}
                  margin={'5px 5px 0 0'}
                ></Btn>
              </LinkBox>
            </MainFirstBox>
            <MainSecondBox>
              <h2>{AllQuestion} results</h2>
              <SortTab
                funcprop={clickVote}
                funcprop2={clickNewest}
                text={'Vote'}
                text2={'Newest'}
              />
            </MainSecondBox>
            <ContentsBox>
              {question &&
                question.map((data) => {
                  return (
                    <SectionUL key={data && data.questionId}>
                      <SectionLI>
                        <RigthSection>
                          <div>{data && data.voteCount} votes</div>
                          <div>{data && data.answerCount} answers</div>
                          <div>{data && data.viewCount} views</div>
                        </RigthSection>
                      </SectionLI>
                      <ContentLI>
                        <ContentsSection>
                          <Link to={`/question/${data.questionId}`}>
                            {data && data.title}
                          </Link>
                          <Contents>{data && data.Content}</Contents>
                          <footer>
                            <Tags>
                              {data &&
                                data.tagLists.map((tag, i) => {
                                  return (
                                    <Tag key={i}> {tag.tags.tagName} </Tag>
                                  );
                                })}
                            </Tags>
                            <ProfileAndDate>
                              <ProfileImg src={Img} alt="프로필" />
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  gap: '10px',
                                }}
                              >
                                <Name>[{data && data.nickName}]</Name>
                                <Date>{data && data.regDate.slice(0, 10)}</Date>
                              </div>
                            </ProfileAndDate>
                          </footer>
                        </ContentsSection>
                      </ContentLI>
                    </SectionUL>
                  );
                })}
            </ContentsBox>
            <Paging count={count} onClick={handlepage} abc={15} />
          </MainMiniBox>
          <RightSide />
        </MainMidBox>
      </MainBox>
    </>
  );
};

export default Main;
