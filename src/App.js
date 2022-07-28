import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/:userId/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
