import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Page from "./Page";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const PrevOrNext = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #556c30;
  color: #556c30;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
`;

export default function Pagination({ total, limit, page, setPage }) {
  const [pages, setPages] = useState(Math.ceil(total / limit));
  const numbers = Array(pages)
    .fill(0)
    .map((number, idx) => idx + 1);

  useEffect(() => {
    setPages(Math.ceil(total / limit));
  }, [total, limit]);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < total / limit) {
      setPage(page + 1);
    } else {
      alert("마지막 페이지입니다.");
    }
  };

  return (
    <Container>
      <PrevOrNext onClick={handlePrev}>
        <FaChevronLeft />
      </PrevOrNext>
      {numbers.map((number) => {
        return (
          <Page key={number} number={number} page={page} setPage={setPage} />
        );
      })}
      <PrevOrNext onClick={handleNext}>
        <FaChevronRight />
      </PrevOrNext>
    </Container>
  );
}
