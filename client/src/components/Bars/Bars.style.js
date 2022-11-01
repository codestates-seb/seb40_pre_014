import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const FaBarss = styled(FaBars)`
  display: none;
  @media screen and (max-width: 580px) {
    width: 50%;
    height: 100%;
    padding: 0 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
