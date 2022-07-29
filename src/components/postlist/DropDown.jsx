import styled from "@emotion/styled";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Container = styled.div``;

const Initial = styled.button`
  width: 120px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #beb66c;
  background-color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #beb66c;
  cursor: pointer;
`;

const OptionList = styled.ul`
  position: absolute;
  width: 120px;
  border: 1px solid #beb66c;
  z-index: 999;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 5px;
`;

const Option = styled.li`
  font-size: 14px;
  color: #666;
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: #beb66c;
    font-weight: bold;
  }
`;

const IconWrapper = styled.div`
  border: none;
  background: none;
  font-size: 14px;
  color: #beb66c;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
`;

export default function DropDown({ limit, setLimit, setPage }) {
  const options = [
    { text: "5개씩 보기", value: 5 },
    { text: "10개씩 보기", value: 10 },
    { text: "15개씩 보기", value: 15 },
    { text: "20개씩 보기", value: 20 },
  ];
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const handleLimit = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  const handleOption = (size) => {
    setLimit(size);
    setPage(1);
    setIsOptionOpen(false);
  };
  return (
    <Container>
      <Initial onClick={handleLimit}>
        {limit}개씩 보기
        <IconWrapper>
          <FaChevronDown />
        </IconWrapper>
      </Initial>
      {isOptionOpen ? (
        <OptionList>
          {options.map((option) => {
            return (
              <Option
                key={option.value}
                onClick={() => {
                  handleOption(option.value);
                }}
              >
                {option.text}
              </Option>
            );
          })}
        </OptionList>
      ) : null}
    </Container>
  );
}
