import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.li`
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ececec;
  border-radius: 10px;
  display: flex;
  transition: background-color, transform 0.3s ease;
  &:hover {
    box-shadow: 2px 2px 5px #ececec;
    font-weight: bold;
    color: #556b2f;
    transform: scale(1.02);
  }
`;

const No = styled.div`
  text-align: center;
  width: 10%;
`;

const Title = styled.div`
  flex-grow: 1;
`;

const Author = styled.div`
  text-align: center;
  width: 15%;
`;

export default function Post({ userId, id, title, body }) {
  return (
    <Link to={`/post/${id}`} style={{ textDecoration: "none", color: "#000" }}>
      <Container>
        <No>{id}</No>
        <Title>{title}</Title>
        <Author>{`작성자 ${userId}`}</Author>
      </Container>
    </Link>
  );
}
