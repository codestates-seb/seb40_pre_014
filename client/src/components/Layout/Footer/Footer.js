import React from 'react';
import { Footers, FooterBox, IconBox, BottomNav } from './Footer.style';
import BottomLogo from '../../../../src/assets/images/768px-Stack_Overflow_icon.svg.png';
import menus from './menus';
import MenuList from './MenuList/MenuList';

const Footer = () => {
  return (
    <Footers>
      <FooterBox>
        <IconBox>
          <img
            src={BottomLogo}
            alt=""
            style={{
              height: '60px',
              width: '60px',
            }}
          />
        </IconBox>
        <BottomNav>
          {menus.map(({ menuCategory, to, subMenus }) => (
            <MenuList
              menuCategories={menuCategory}
              to={to}
              subMenus={subMenus}
              key={menuCategory}
            />
          ))}
        </BottomNav>
      </FooterBox>
    </Footers>
  );
};

export default Footer;

//메인 완성된 뒤에 디자인 수정 필요
