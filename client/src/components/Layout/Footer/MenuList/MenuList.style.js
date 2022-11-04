import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media screen and (max-width: 980px) {
    flex-flow: column wrap;
  }
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-weight: bold;
  h4 {
    color: #babfc4;
    margin-bottom: 25px;
    text-decoration: none;
    @media screen and (max-width: 980px) {
      margin-bottom: 10px;
    }
  }
`;

export const SubMenuUL = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 12px;
  font-size: 0.85rem;

  @media screen and (max-width: 980px) {
    flex-flow: row wrap;
    column-gap: 10px;
  }
`;

export const SubMenuLI = styled.li`
  color: #fff;
  a {
    color: #fff;
    &:visited {
      color: blue;
    }
    &:hover {
      color: #81867f;
    }
  }

  @media screen and (max-width: 980px) {
    width: max-content;
    margin-top: 0px;
  }
`;

export const LinkBox = styled(Link)`
  text-decoration: none;
`;
