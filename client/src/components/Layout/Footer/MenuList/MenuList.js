/* eslint-disable no-unused-vars */
import React from 'react';
import {
  MenuBox,
  CategoryBox,
  SubMenuUL,
  SubMenuLI,
  LinkBox,
} from './MenuList.style';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { TapStates } from '../../../../states/Tap';

const MenuList = ({ menuCategories, to, subMenus }) => {
  const [tap, setTap] = useRecoilState(TapStates);
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/');
    setTap({ One: true, Two: false, Three: false });
  };
  return (
    <MenuBox>
      <CategoryBox>
        <LinkBox to={to}>
          <h4>{menuCategories}</h4>
        </LinkBox>
      </CategoryBox>
      <SubMenuUL>
        {subMenus.map((link, i) => {
          return (
            <SubMenuLI index={i} key={link.title}>
              <LinkBox onClick={clickHandler}>{link.title}</LinkBox>
            </SubMenuLI>
          );
        })}
      </SubMenuUL>
    </MenuBox>
  );
};

export default MenuList;
