import React, { useEffect, useState } from 'react';
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

const Main = () => {
  const [question, setQuestion] = useState([]);

  const clickVote = () => {
    let sort = question.sort((a, b) => {
      return b.voteCount - a.voteCount;
    });
    setQuestion([...sort]);
    console.log(setQuestion);
  };

  const clickNewest = () => {
    let sort = question.sort((a, b) => {
      return new Date(b.regDate) - new Date(a.regDate);
    });
    setQuestion([...sort]);
  };

  const getQuestion = async () => {
    const res = await axios
      .get(
        `http://3.38.108.228:8080/question/?page=1&size=1000&sort=questionId`,
      )
      .catch((err) => console.log(err));
    return res.data;
  };

  useEffect(() => {
    getQuestion().then((el) => setQuestion(el.data));
  }, []);
  console.log('qweqwe', question);
  return (
    <>
      <MainBox>
        <MainMidBox>
          <LeftSide />
          <MainMiniBox>
            <MainFirstBox>
              <h1>All Questions</h1>
              <LinkBox to={'/question'}>
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
              <h2>{question.length} results</h2>
              <SortTab
                funcprop={clickVote}
                funcprop2={clickNewest}
                text={'Vote'}
                text2={'Newest'}
              />
            </MainSecondBox>
            <ContentsBox>
              {question.map((data) => {
                return (
                  <SectionUL key={data.questionId}>
                    <SectionLI>
                      <RigthSection>
                        <div>{data.voteCount} votes</div>
                        <div>{data.answersCount} answers</div>
                        <div>{data.viewCount} views</div>
                      </RigthSection>
                    </SectionLI>
                    <ContentLI>
                      <ContentsSection>
                        <a href="*">{data.title}</a>
                        <Contents>{data.content}</Contents>
                        <footer>
                          <Tags>
                            {data.tagLists.map((tag, i) => {
                              return <Tag key={i}> {tag.tags.tagName} </Tag>;
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
                              <Name>[{data.nickName}]</Name>
                              <Date>{data.regDate.slice(0, 10)}</Date>
                            </div>
                          </ProfileAndDate>
                        </footer>
                      </ContentsSection>
                    </ContentLI>
                  </SectionUL>
                );
              })}
            </ContentsBox>
            <Paging />
          </MainMiniBox>
          <RightSide />
        </MainMidBox>
      </MainBox>
    </>
  );
};

export default Main;
