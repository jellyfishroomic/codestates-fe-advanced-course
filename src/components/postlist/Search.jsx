import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { FaSearch, FaTrashAlt } from "react-icons/fa";

const Container = styled.div`
  width: 300px;
  border: 1px solid #beb66c;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  color: #beb66c;
  cursor: pointer;
  padding: 0 5px;
`;

export default function Search({ setSearchText }) {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef();
  const handleDelete = () => {
    inputRef.current.value = "";
    setSearchText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSearch = () => {
    setSearchText(inputText);
  };

  return (
    <Container>
      <SearchInput
        placeholder="검색어를 입력해주세요."
        onChange={handleChange}
        ref={inputRef}
      />
      <IconWrapper onClick={handleDelete}>
        <FaTrashAlt />
      </IconWrapper>
      <IconWrapper onClick={handleSearch}>
        <FaSearch />
      </IconWrapper>
    </Container>
  );
}
