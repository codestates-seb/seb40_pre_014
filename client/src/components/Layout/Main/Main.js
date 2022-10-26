import React from 'react';
import { dummy } from './Dummy';
import { MainBox, MainMiniBox } from './Main.style';

const Main = () => {
  return (
    <MainBox>
      <MainMiniBox>
        {dummy.map((data, i) => {
          return (
            <div key={i}>
              <div>{data.id}</div>
              <div>{data.title}</div>
              <div>{data.contents}</div>
              <div>{data.createAt}</div>
              <div>{data.answers}</div>
            </div>
          );
        })}
      </MainMiniBox>
    </MainBox>
  );
};

export default Main;
