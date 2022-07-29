import styled from "@emotion/styled";

const Container = styled.li`
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #beb66c;
  border-radius: 10px;
  display: flex;
  transition: background-color, transform 0.3s ease;
  text-align: center;
  color: #beb66c;
  font-weight: bold;
`;

const No = styled.div`
  width: 10%;
`;

const Title = styled.div`
  flex-grow: 1;
`;

const Author = styled.div`
  width: 15%;
`;

export default function ListTop() {
  return (
    <Container>
      <No>No</No>
      <Title>제목</Title>
      <Author>작성자</Author>
    </Container>
  );
}
