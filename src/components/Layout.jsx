import styled from "@emotion/styled";
import Header from "./Header";

const Container = styled.div`
  background-color: #ececec;
  width: 100%;
  height: 100%;
`;

const Inner = styled.main``;

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Inner>{children}</Inner>
    </Container>
  );
}
