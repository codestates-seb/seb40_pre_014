import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthButtonBox = styled.div`
  display: flex;
  column-gap: 5px;
  margin: 0 10px;
`;

export const AuthButtonLink = styled(Link)`
  text-decoration: none;
`;
