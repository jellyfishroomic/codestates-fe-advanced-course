import styled from "@emotion/styled";

const Container = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #556c30;
  border-radius: 5px;
  margin: 0 5px;
  text-align: center;
  line-height: 40px;
  color: #556c30;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #556c30;
    color: #fff;
  }
`;

const CurrentPage = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #556c30;
  border-radius: 5px;
  margin: 0 5px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  background-color: #556c30;
`;

export default function Page({ number, page, setPage }) {
  const handleClick = () => {
    setPage(number);
  };
  return number === page ? (
    <CurrentPage>{number}</CurrentPage>
  ) : (
    <Container onClick={handleClick}>{number}</Container>
  );
}
