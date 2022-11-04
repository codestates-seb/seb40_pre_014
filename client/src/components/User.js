import styled from 'styled-components';
import userImg from '../assets/images/user.png';

const User = ({ users }) => {
  return (
    <User_Container>
      {users.map((user) => (
        <User_Wrap key={user.number}>
          <img src={userImg} alt=""></img>
          <div className="textWrap">
            <UserName> [{user.nickName}] </UserName>
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
const UserName = styled.p`
  font-weight: 600;
  padding-bottom: 10px;
  margin-top: 6px;
`;

const User_Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  .textWrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 0 0 7px;
  }
`;

export default User;
