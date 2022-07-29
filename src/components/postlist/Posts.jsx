import styled from "@emotion/styled";
import Post from "./Post";

const Container = styled.div``;

export default function Posts({
  filteredPosts,
  limit,
  page,
  setPage,
  searchText,
}) {
  filteredPosts.sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    }
    if (a.id > b.id) {
      return -1;
    }
    return 0;
  });

  const begin = (page - 1) * limit;

  return (
    <Container>
      {filteredPosts.slice(begin, begin + limit).map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </Container>
  );
}
