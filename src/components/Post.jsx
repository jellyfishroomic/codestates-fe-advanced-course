import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { userId, id } = useParams();
  useEffect(() => {
    document.title = `${userId}님의 ${id}번째 포스트`;
  });
  return <div>{`${userId}님의 ${id}번째 포스트입니다.`}</div>;
}
