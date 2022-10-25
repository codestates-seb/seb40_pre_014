import React from 'react';
import { MenuBox, CategoryBox, SubMenuUL, SubMenuLI } from './MenuList.style';
import { Link } from 'react-router-dom';

const MenuList = ({ menuCategories, to, subMenus }) => {
  return (
    <MenuBox>
      <CategoryBox>
        <Link to={to}>
          <h4>{menuCategories}</h4>
        </Link>
      </CategoryBox>
      <SubMenuUL>
        {subMenus.map((link, i) => {
          <SubMenuLI index={i} key={link.title} className={link.className}>
            <Link to={link.to}>{link.title}</Link>
          </SubMenuLI>;
        })}
      </SubMenuUL>
    </MenuBox>
  );
};

export default MenuList;
