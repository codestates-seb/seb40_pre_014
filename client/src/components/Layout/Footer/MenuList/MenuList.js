import React from 'react';
import {
  MenuBox,
  CategoryBox,
  SubMenuUL,
  SubMenuLI,
  LinkBox,
} from './MenuList.style';

const MenuList = ({ menuCategories, to, subMenus }) => {
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
              <LinkBox to={link.to}>{link.title}</LinkBox>
            </SubMenuLI>
          );
        })}
      </SubMenuUL>
    </MenuBox>
  );
};

export default MenuList;
