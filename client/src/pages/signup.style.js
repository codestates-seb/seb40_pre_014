import styled from 'styled-components';

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .signup {
    color: #41739a;
    margin-left: 2px;
    border-style: none;
    cursor: pointer;
  }
  .support {
    display: flex;
    align-items: center;
    font-size: 15px;
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

export const Signup_Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: white;
  border-radius: 5px;
  height: 400px;
  width: 300px;
  padding: 50px 5px 10px 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 30px;

  .comment {
    width: 240px;
    font-size: 13px;
    color: rgb(102, 111, 120);
    margin-bottom: 15px;
    margin-top: ${(props) => props.margin};
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #eff0f1;
`;

export const Description = styled.div`
  height: 300px;
  display: flex;
  margin-right: 50px;
  flex-direction: column;
  justify-content: space-evenly;

  .title {
    font-size: 27px;
  }

  .icon {
    width: 26px;
    height: 26px;
  }

  > div > p {
    font-size: 15px;
  }
`;
