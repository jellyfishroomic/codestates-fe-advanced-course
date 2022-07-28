import Post from "./Post";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";

const Base = styled.div`
  background-color: #efefef;
`;
const List = styled.ul`
  max-width: 760px;
  margin: 0 auto;
  padding: 50px;
  background-color: #fff;
  border-left: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
`;

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => setPosts(data.data));
  }, []);
  return (
    <Base>
      <List>
        {posts.map((post) => {
          return <Post {...post} key={post.id} />;
        })}
      </List>
    </Base>
  );
}
