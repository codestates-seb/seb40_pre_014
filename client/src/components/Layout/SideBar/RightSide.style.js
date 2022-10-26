import styled from 'styled-components';
import { FaPen, FaRegCommentAlt } from 'react-icons/fa';

export const RightBar = styled.div`
  width: 25em;
  border: 1px solid #fbf3d5;
  background-color: #fbf3d5;
  color: rgb(59, 64, 69);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  header {
    padding: 12px 15px;
    border-bottom: 1px solid hsl(47, 65%, 84%);
    font-size: 15px;
  }
  ul {
    padding: 4px 15px;
    background-color: #faf5e6;
  }
  li {
    margin: 12px 0;
    font-size: 13px;
  }
`;

export const PenIcon = styled(FaPen)`
  width: 10px;
  height: 10px;
  color: black;
  padding-right: 5px;
`;

export const CommentIcon = styled(FaRegCommentAlt)`
  width: 10px;
  height: 10px;
  color: skyblue;
  padding-right: 5px;
`;

// export const RightSide2 = styled.div`
//   background-color: white;
//   width: 19rem;
//   height: 23rem;
//   margin-top: 50px;
//   margin-right: 0;
//   border: 1px solid gray;
//   color: rgb(59, 64, 69);
//   box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
//     0 2px 8px hsla(0, 0%, 0%, 0.05);

//   header {
//     padding: 12px 15px;
//     border-bottom: 1px solid #d6d9dc;
//   }

//   li {
//     padding: 30px 15px;
//   }
//   span {
//     font-size: 13px;
//   }
//   img {
//     width: 40px;
//   }
// `;
