import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthButtonBox = styled.div`
  display: flex;
  column-gap: 3px;
  margin-left: 40px;
`;

export const AuthButtonLink = styled(Link)`
  text-decoration: none;
`;

export const LoginBox = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: silver;
`;

export const SignupBox = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: skyblue;
`;
