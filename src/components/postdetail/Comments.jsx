import styled from "@emotion/styled";
import Comment from "./Comment";
import { AiOutlineComment } from "react-icons/ai";
import Pagination from "../Pagination";
import { useState } from "react";

const Container = styled.div`
  padding: 0 50px 50px;
`;

const CommentCount = styled.div`
  font-size: 14px;
  text-align: right;
  border-bottom: 1px solid #ececec;
  padding: 15px 0;
  margin-bottom: 20px;
  color: #556c30;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & span {
    font-size: 18px;
    font-weight: bold;
  }
`;

const IconWrapper = styled.div`
  font-size: 24px;
  margin: 0 5px;
`;

export default function Comments({ comments }) {
  const [page, setPage] = useState(1);
  const limit = 3;
  const begin = (page - 1) * limit;
  return (
    <Container>
      <CommentCount>
        <IconWrapper>
          <AiOutlineComment />
        </IconWrapper>
        <span>{comments.length}</span>개의 댓글
      </CommentCount>
      {comments.slice(begin, begin + limit).map((comment) => {
        return <Comment {...comment} />;
      })}
      <Pagination
        total={comments.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </Container>
  );
}
