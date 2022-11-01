import React from 'react';
import Btn from '../../Button/Btn';
import { dummy } from './Dummy';
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
  LinkBox,
} from './Main.style';
import LeftSide from '../SideBar/LeftSide';
import RightSide from '../SideBar/RightSide';

const Main = () => {
  return (
    <MainBox>
      <LeftSide />
      <MainMidBox>
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
            <h2>{dummy.length} results</h2>
            <h2>정렬 탭 들어갈 자리</h2>
          </MainSecondBox>
          <ContentsBox>
            {dummy.map((data, i) => {
              return (
                <SectionUL key={i}>
                  <SectionLI>
                    <RigthSection>
                      <div>{data.votes} votes</div>
                      <div>{data.answers} answers</div>
                      <div>{data.views} views</div>
                    </RigthSection>
                  </SectionLI>
                  <ContentLI>
                    <ContentsSection>
                      <a href="*">{data.title}</a>
                      <p>{data.contents}</p>
                      <footer>
                        <div>[태그]</div>
                        <div>
                          {data.userName} {data.createAt}
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
