# codestates-fe-advanced-course

## Deployment

[배포 사이트(vercel)](https://codestates-fe-advanced-course.vercel.app/)

## Features GIF

- 게시물 리스트
  - 게시물 리스트 페이지네이션
- 게시물 상세 페이지
- Modal, Tap, Toggle, Search

# 프로젝트 실행 방법

- 프로젝트 파일을 다운로드하고 다운받은 경로로 이동합니다.
- `cd codestates-fe-advanced-course-main` : 로컬에서 다운받은 폴더로 이동합니다.
- `npm ci` : 프로젝트에 필요한 패키지를 다운받습니다.
- `npm run start` : 프로젝트를 실행합니다.

# 사용한 스택 목록

- Javascript
- HTML5
- React
- CSS(emotion)

# 구현 기능 목록

## 필수 구현 사항

- [x] 무료 목업 API인 [JSON Placeholder](https://jsonplaceholder.typicode.com/)를 활용합니다.
- [x] 게시물 리스트 구현
  - [x] 100개의 포스트 데이터를 렌더링 합니다.
  - [x] `userId`, `title` 속성을 사용해 화면에 표현합니다.
- [x] 게시물 상세 페이지 구현
  - [x] `/posts/id` 엔드포인트로 데이터를 요청합니다.
  - [x] `userId`, `title`, `body` 속성을 사용해 화면에 표현합니다.
  - [x] `/comments` 엔드포인트로 데이터를 요청합니다.
  - [x] 한 포스트 당 5개의 코멘트 데이터를 렌더링 합니다.
  - [x] `name`, `body` 속성을 사용해 화면에 표현합니다.
  
## 추가 구현 사항

- [x] 동적 라우팅 구현
- [x] 게시물 리스트 페이지네이션 구현
  - [x] 각 페이지 당 포스팅 수는 10개로 제한합니다.
  - [ ] 전체 데이터를 컴포넌트에서 상태 값으로 처리합니다.
- [ ] [JSON Placeholder](https://jsonplaceholder.typicode.com/) API에서 제공되는 나머지 데이터들을 활용합니다.
- [ ] Modal, Tab, Toggle, Search 등을 활용합니다.

## 기능 구현 회고

# Wireframe

🪄 [Figma Link](https://www.figma.com/file/AqwWkdGAfoxRWaKt89Ciki/codestate-fe-advanced-course?node-id=0%3A1)

Figma 툴을 사용하여 High Fidelity Wireframe을 작성했습니다.
