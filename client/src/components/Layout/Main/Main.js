import React, { useState } from 'react';
import Btn from '../../Button/Btn';
import dummyQuestion from '../../../static/dymmyQuestion';
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
} from './Main.style';
import LeftSide from '../SideBar/LeftSide';
import RightSide from '../SideBar/RightSide';
import { Link } from 'react-router-dom';
import SortTab from '../../Button/SortTab';

const Main = () => {
  const [question, setQuestion] = useState(dummyQuestion);

  const clickVote = () => {
    let sort = dummyQuestion.sort((a, b) => {
      return b.voteCount - a.voteCount;
    });
    console.log(sort);
    setQuestion([...sort]);
  };

  const clickNewest = () => {
    let sort = dummyQuestion.sort((a, b) => {
      return new Date(b.regDate) - new Date(a.regDate);
    });
    console.log(sort);
    setQuestion([...sort]);
  };

  return (
    <MainBox>
      <LeftSide />
      <MainMidBox>
        <MainMiniBox>
          <MainFirstBox>
            <h1>All Questions</h1>
            <Link to={'/question'}>
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
            </Link>
          </MainFirstBox>
          <MainSecondBox>
            <h2>{dummyQuestion.length} results</h2>
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
                      <div>{data.answers.length} answers</div>
                      <div>{data.view} views</div>
                    </RigthSection>
                  </SectionLI>
                  <ContentLI>
                    <ContentsSection>
                      <a href="*">{data.title}</a>
                      <p>{data.content}</p>
                      <footer>
                        <Tags>
                          {data.tagList.map((tag, i) => {
                            return <Tag key={i}> {tag} </Tag>;
                          })}
                        </Tags>
                        <div>
                          {data.nickName} {data.regDate}
                        </div>
                      </footer>
                    </ContentsSection>
                  </ContentLI>
                </SectionUL>
              );
            })}
          </ContentsBox>
        </MainMiniBox>
        <RightSide />
      </MainMidBox>
    </MainBox>
  );
};

export default Main;
