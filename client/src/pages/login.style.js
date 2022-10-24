import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #eff0f1;
  > div > span {
    color: #202225;
  }
`;

export const Input_Wrap = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    font-weight: bold;
    margin-bottom: 5px;
  }

  > input {
    height: 30px;
    width: 240px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 2px solid lightgray;
  }
`;

export const Login_Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 5px;
  height: 240px;
  width: 290px;
  padding: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 30px;
`;

export const Login_Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(13, 138, 225);
  width: 245px;
  height: 40px;
  border-radius: 5px;

  > span {
    color: white;
  }

  :hover {
    background: #0069c5;
  }
`;
