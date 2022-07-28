import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

const Base = styled.div``;
const PostWrapper = styled.div`
  max-width: 760px;
  margin: 50px auto;
  /* box-shadow: 0px 0px 10px #ebebeb; */
  border: 1px solid #ececec;
  border-radius: 20px;
  /* padding: 50px; */
`;
const TitleWrapper = styled.div`
  color: #000;
  /* background-color: #bdb76b; */
  padding: 50px;
  border-bottom: 1px solid #ececec;
`;
const Title = styled.h1`
  font-size: 34px;
  font-weight: lighter;
`;
const Author = styled.div`
  font-weight: bold;
  text-align: right;
  color: #556b2f;
  margin-top: 30px;
`;
const Body = styled.p`
  padding: 50px;
  font-size: 18px;
  line-height: 24px;
`;
const Comments = styled.div`
  /* background-color: #efefef; */
  padding: 50px;
`;
const CommentCount = styled.div`
  text-align: right;
  border-bottom: 1px solid #ececec;
  padding: 20px 0;
  margin-bottom: 20px;
  & span {
    font-weight: bold;
  }
`;
const Comment = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ececec;
`;
const CommentTitle = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  color: #556b2f;
`;
const CommentBody = styled.div`
  color: #ccc;
  font-size: 14px;
`;

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((data) => setPost(data.data));
    axios
      .get(`https://jsonplaceholder.typicode.com/post/${id}/comments`)
      .then((data) => setComments(data.data));
  }, [id]);
  document.title = post ? `${post.title}` : "Post Detail";
  return (
    <Base>
      <PostWrapper>
        <TitleWrapper>
          <Title>{post.title}</Title>
          <Author>Author {post.userId}</Author>
        </TitleWrapper>
        <Body>{post.body}</Body>
        <Comments>
          <CommentCount>
            <span>{comments.length}</span> Comments
          </CommentCount>
          {comments.map((comment) => {
            return (
              <Comment>
                <CommentTitle>{comment.name}</CommentTitle>
                <CommentBody>{comment.body}</CommentBody>
              </Comment>
            );
          })}
        </Comments>
      </PostWrapper>
    </Base>
  );
}
