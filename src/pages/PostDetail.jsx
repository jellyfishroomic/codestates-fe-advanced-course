import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import Body from "../components/postdetail/Body";
import Title from "../components/postdetail/Title";
import Comments from "../components/postdetail/Comments";

const DetailWrapper = styled.div`
  margin: 0 auto;
  max-width: 860px;
  border: 1px solid #ececec;
  border-radius: 20px;
  background-color: #fff;
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
    <Layout>
      <DetailWrapper>
        <Title {...post} />
        <Body {...post} />
        <Comments comments={comments} />
      </DetailWrapper>
    </Layout>
  );
}
