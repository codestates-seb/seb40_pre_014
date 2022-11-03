import styled from 'styled-components';
import userImg from '../assets/images/user.png';

const User = ({ users }) => {
  return (
    <User_Container>
      {users.map((user) => (
        <User_Wrap key={user.number}>
          <img src={userImg} alt=""></img>
          <div className="textWrap">
            <p> {user.nickName} </p>
            <p> {user.number} </p>
          </div>
        </User_Wrap>
      ))}
    </User_Container>
  );
};

const User_Wrap = styled.div`
  display: flex;
  width: 250px;
  height: 81px;
  margin: 6px;

  > img {
    width: 48px;
    height: 48px;
    border-radius: 5px;
  }
`;

const User_Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px 7px 7px;
  width: 100%;

  .textWrap {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 7px;
  }
`;

export default User;
