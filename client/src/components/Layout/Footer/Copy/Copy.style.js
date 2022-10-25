import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SubMenuLI, SubMenuUL } from '../MenuList/MenuList.style';

export const CopyBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 200px;
  row-gap: 15px;
  max-width: 300px;

  @media screen and (max-width: 980px) {
    margin-top: 40px;
    min-height: 40px;
    max-width: 100%;
  }
`;

export const LinkBox = styled(Link)`
  text-decoration: none;
`;

export const SociallUL = styled(SubMenuUL)`
  width: 100%;
  height: 20px;
  height: fit-content;
  flex-flow: row wrap;
  column-gap: 5px;
  font-size: 0.8rem;
`;

export const SocialLI = styled(SubMenuLI)`
  margin-bottom: auto;
  @media screen and (max-width: 980px) {
    flex-flow: column wrap;
  }
`;

export const LicenseBox = styled.p`
  display: flex;
  align-items: flex-end;
  width: 100%;
  font-size: 0.7rem;
  line-height: 1rem;
  color: #81868c;
  height: fit-content;
`;
