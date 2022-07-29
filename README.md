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
- axios
- react-icons
- Figma

# 구현 기능 목록

## 1. 공통

|필수 여부|항목|
|--|--|
|필수|무료 목업 API인 [JSON Placeholder](https://jsonplaceholder.typicode.com/)를 활용합니다.|
|추가 구현|동적 라우팅 구현|
|추가 구현|공통 헤더 적용을 위한 Layout 컴포넌트 사용|

## 2. 게시물 목록 페이지

|필수 여부|항목|
|--|--|
|필수|`/posts` 엔드포인트로 포스트 데이터를 요청합니다.|
|필수|100개의 포스트 데이터를 렌더링 합니다.|
|필수|`userId`, `title` 속성을 사용해 포스트의 `제목`과 `작성자`를 화면에 표현합니다.|
|추가 구현|`id` 속성을 사용해 포스트의 `넘버링`을 화면에 표현합니다.|
|추가 구현|페이지네이션 구현|
|추가 구현|각 페이지 당 포스팅 수는 기본 10개로 제한합니다.|
|추가 구현|각 페이지 당 포스팅 수를 선택할 수 있습니다.|
|추가 구현|제목 검색 기능 구현|

## 3. 게시물 상세 페이지

|필수 여부|항목|
|--|--|
|필수|`/posts/id` 엔드포인트로 포스트 데이터를 요청합니다.|
|필수|`/comments` 엔드포인트로 코멘트 데이터를 요청합니다.|
|필수|`userId`, `title`, `body` 속성을 사용해 포스트의 `제목`과 `작성자`, `내용`을 화면에 표현합니다.|
|필수|한 포스트 당 5개의 코멘트 데이터를 렌더링 합니다.|
|필수|`name`, `body` 속성을 사용해 코멘트의 `제목`과 `내용`을 화면에 표현합니다.|

## 기능 구현 회고

# Wireframe

🪄 [Figma Link](https://www.figma.com/file/AqwWkdGAfoxRWaKt89Ciki/codestate-fe-advanced-course?node-id=0%3A1)

- Figma 툴을 사용하여 High Fidelity Wireframe을 작성했습니다.
- Master Component를 활용해 수정이 용이하도록 구성했습니다.
