import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import DropDown from "../components/postlist/DropDown";
import Search from "../components/postlist/Search";
import ListTop from "../components/postlist/ListTop";
import Posts from "../components/postlist/Posts";
import { API_URL } from "../utils/api";
import Pagination from "../components/postlist/Pagination";

const ListWrapper = styled.div`
  background-color: #fff;
  max-width: 860px;
  margin: 0 auto;
  padding: 50px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #556c30;
`;

const PostsLength = styled.div`
  & span {
    font-weight: bold;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    axios.get(`${API_URL}/posts`).then((data) => setPosts(data.data));
  }, []);

  useEffect(() => {
    if (searchText.length > 0) {
      setFilteredPosts(
        posts.filter((post) => {
          return post.title.includes(searchText);
        })
      );
    } else {
      setFilteredPosts(posts);
    }
  }, [searchText, posts]);

  return (
    <Layout>
      <ListWrapper>
        <Title>게시판</Title>
        <ItemWrapper>
          <PostsLength>
            총 <span>{filteredPosts.length}</span>건의 글이 있습니다.
          </PostsLength>
          <ItemWrapper>
            <Search setSearchText={setSearchText} />
            <DropDown limit={limit} setLimit={setLimit} setPage={setPage} />
          </ItemWrapper>
        </ItemWrapper>
        <ListTop />
        <Posts
          filteredPosts={filteredPosts}
          limit={limit}
          page={page}
          setPage={setPage}
          searchText={searchText}
        />
        <Pagination
          total={filteredPosts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </ListWrapper>
    </Layout>
  );
}
