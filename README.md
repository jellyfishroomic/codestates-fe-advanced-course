# codestates-fe-advanced-course

## Deployment

[배포 사이트(vercel)](https://codestates-fe-advanced-course.vercel.app/)

## Features GIF

- 게시물 리스트 및 페이지네이션

![codestates-fe-advanced-course-1](https://user-images.githubusercontent.com/110115843/181914261-308922ee-8aed-46e0-8223-48795b66ee20.gif)

- 게시물 리스트 포스팅 수 설정

![codestates-fe-advanced-course-2](https://user-images.githubusercontent.com/110115843/181914283-e26e8e0e-7512-4068-be88-2a8004df7fd2.gif)

- 제목 검색 기능

![codestates-fe-advanced-course-3](https://user-images.githubusercontent.com/110115843/181914300-2a64af77-2d11-4408-9d25-ef78594bc5f9.gif)

- 게시물 상세 페이지

![codestates-fe-advanced-course-4](https://user-images.githubusercontent.com/110115843/181914309-dbd36a46-68e7-4ef8-b7d1-d40f5c8237df.gif)

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

| 필수 여부 | 항목                                                                                    |
| --------- | --------------------------------------------------------------------------------------- |
| 필수      | 무료 목업 API인 [JSON Placeholder](https://jsonplaceholder.typicode.com/)를 활용합니다. |
| 추가 구현 | 동적 라우팅 구현                                                                        |
| 추가 구현 | 공통 헤더 적용을 위한 Layout 컴포넌트 사용                                              |

## 2. 게시물 목록 페이지

| 필수 여부 | 항목                                                                            |
| --------- | ------------------------------------------------------------------------------- |
| 필수      | `/posts` 엔드포인트로 포스트 데이터를 요청합니다.                               |
| 필수      | 100개의 포스트 데이터를 렌더링 합니다.                                          |
| 필수      | `userId`, `title` 속성을 사용해 포스트의 `제목`과 `작성자`를 화면에 표현합니다. |
| 추가 구현 | `id` 속성을 사용해 포스트의 `넘버링`을 화면에 표현합니다.                       |
| 추가 구현 | 페이지네이션 구현                                                               |
| 추가 구현 | 각 페이지 당 포스팅 수는 기본 10개로 제한합니다.                                |
| 추가 구현 | 각 페이지 당 포스팅 수를 선택할 수 있습니다.                                    |
| 추가 구현 | 제목 검색 기능 구현                                                             |

## 3. 게시물 상세 페이지

| 필수 여부 | 항목                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------- |
| 필수      | `/posts/id` 엔드포인트로 포스트 데이터를 요청합니다.                                            |
| 필수      | `/comments` 엔드포인트로 코멘트 데이터를 요청합니다.                                            |
| 필수      | `userId`, `title`, `body` 속성을 사용해 포스트의 `제목`과 `작성자`, `내용`을 화면에 표현합니다. |
| 필수      | 한 포스트 당 5개의 코멘트 데이터를 렌더링 합니다.                                               |
| 필수      | `name`, `body` 속성을 사용해 코멘트의 `제목`과 `내용`을 화면에 표현합니다.                      |
| 추가 구현 | `email` 속성을 사용해 코멘트 작성자의 `이메일`을 화면에 표현합니다.                             |
| 추가 구현 | 코멘트 페이지네이션 구현                                                                        |

## 기능 구현 방법

- 동적 라우팅

  - `react-router-dom`의 `BrowserRouter`, `Routes`, `Route`, `Link`를 사용해 동적 라우팅을 구현했습니다.
  - `./src/App.js`에서 `"/"` path와 `"/post/:id"` path로 구분하여 각각 `<PostList />` 컴포넌트와 `<PostDetail />` 컴포넌트를 연결했습니다.

- 데이터 fetch

  - 공통된 base URL을 `utils/api.js`에 `API_URL` 상수로 저장하여 사용했습니다.

- 게시물 목록 페이지

  - `posts` : API 요청으로 전달 받은 전체 포스트 데이터 상태를 저장합니다.
  - `limit` : 각 페이지 당 포스팅 수의 상태를 저장합니다.
  - `page` : 현재 페이지의 상태를 저장합니다.
  - `searchText` : 검색 인풋에 입력된 문자열을 저장합니다.
  - `filteredPosts` : `searchText`와 대조하여 제목에 일치하는 문자열을 포함한 포스트 리스트를 저장합니다.
  - 포스트 데이터를 fetch하고 `searchText`가 있는 경우(사용자가 검색어를 입력한 경우) `filteredPosts`에 필터링된 포스트를 저장하고 `searchText`가 없는 경우(사용자가 검색어를 입력하지 않은 경우) fetch 받은 `posts`를 그대로 `filteredPosts`에 저장합니다.
  - `<Posts />` 컴포넌트는 `filteredPosts`를 `props`으로 받아 각각의 포스트 목록을 표현하는 `<Post />` 컴포넌트를 리턴합니다.

- 게시물 상세 페이지
- 페이지네이션

## 어려웠던 점

- 페이지네이션과 페이지 당 포스팅 수를 설정하는 `<DropDown />` 컴포넌트를 구현할 때 예상과 다른 부분들이 있었습니다.

# Wireframe

🪄 [Figma Link](https://www.figma.com/file/AqwWkdGAfoxRWaKt89Ciki/codestate-fe-advanced-course?node-id=0%3A1)

- Figma 툴을 사용하여 High Fidelity Wireframe을 작성했습니다.
- Master Component를 활용해 수정이 용이하도록 구성했습니다.
