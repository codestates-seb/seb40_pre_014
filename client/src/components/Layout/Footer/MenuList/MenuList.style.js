import styled from 'styled-components';

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
  a {
    color: #fff;

    &:visited {
      color: blue;
    }
    &:hover {
      color: #fff;
    }
  }

  @media screen and (max-width: 980px) {
    width: max-content;
    margin-top: 0px;
  }
`;
