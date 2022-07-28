import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const Base = styled.li`
  padding: 20px;
  margin: 10px 0;
  box-shadow: 2px 2px 5px #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  transition: background-color, transform 0.3s ease;
  &:hover {
    background-color: #bdb76b;
    transform: scale(1.02);
  }
`;

const Title = styled.div``;
const Author = styled.div``;

export default function Post({ userId, id, title, body }) {
  function handleScrollStorage() {
    window.localStorage.setItem("scrollY", window.scrollY);
  }
  return (
    <Link to={`/post/${id}`} style={{ textDecoration: "none", color: "#000" }}>
      <Base>
        <Title>{title}</Title>
        <Author>{`Author ${userId}`}</Author>
      </Base>
    </Link>
  );
}
