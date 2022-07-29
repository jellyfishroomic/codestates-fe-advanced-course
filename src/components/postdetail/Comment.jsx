import styled from "@emotion/styled";

const Container = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ececec;
`;

const TitleEmailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  color: #556b2f;
`;

const Email = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #beb66c;
`;

const Body = styled.div`
  color: #ccc;
  font-size: 14px;
`;

export default function Comment({ name, email, body }) {
  return (
    <Container>
      <TitleEmailWrapper>
        <Title>{name}</Title>
        <Email>{email}</Email>
      </TitleEmailWrapper>
      <Body>{body}</Body>
    </Container>
  );
}
