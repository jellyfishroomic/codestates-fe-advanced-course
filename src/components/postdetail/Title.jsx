import styled from "@emotion/styled";
import { FaUserCircle } from "react-icons/fa";

const Container = styled.div`
  color: #000;
  padding: 50px;
  border-bottom: 1px solid #ececec;
`;

const PostTitle = styled.h1`
  font-size: 34px;
  font-weight: lighter;
`;

const Author = styled.div`
  font-weight: bold;
  text-align: right;
  color: #beb66c;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & span {
    margin: 0 10px;
  }
`;

export default function Title({ title, userId }) {
  return (
    <Container>
      <PostTitle>{title}</PostTitle>
      <Author>
        <FaUserCircle />
        <span>작성자</span>
        {userId}
      </Author>
    </Container>
  );
}
