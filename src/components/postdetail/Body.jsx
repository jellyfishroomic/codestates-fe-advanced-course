import styled from "@emotion/styled";

const Container = styled.p`
  padding: 50px;
  font-size: 18px;
  line-height: 24px;
`;

export default function Body({ body }) {
  return <Container>{body}</Container>;
}
