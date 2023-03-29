# Youtube Clone Coding Project

React와 React-Router, React-Query, TailwindCSS 를 연습하기 위해서 이 프로젝트를 만들었습니다.\
API 연동을 통해서 직접 유튜브 검색을 실제로 구현 할 수 있지만 이 프로젝트를 실행하시는 분들을 위해\
`data`폴더 안에 있는 **Mock Data**를 이용하여 실제 API를 받아 온 것처럼 구현했으니 검색결과와 다른 비디오를 출력할 수 있습니다.

# Getting Started with Create React App

이 프로젝트는 Create React App을 통해 만들었습니다.\
해당 내용에 대한 자세한 설명은 아래 링크에 있습니다.\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

프로젝트를 시작하는 방법\
In the project directory, you can run:

### `yarn start`

터미널에 `yarn strat`를 입력하시면 프로젝트가 시작됩니다\
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# 1. 요구사항

- 라우팅 기능 지원 (paging)
  ```
  <App>
  	/ 👉 <Videos>🔥
  	/videos 👉 <Videos>🔥
  	/videos/query 👉 <Videos>🔍
  	/videos/watch/id 👉 <VideoDetail>
  ```
  - / : Hot trend Video를 출력
  - /videos/[검색한 내용] : 검색한 내용에 해당하는 비디오 출력
  - /videos/[검색한 내용] 으로 나온 결과물 중 비디오 클릭시 → /videos/watch/[해당 video id] : 해당 video의 디테일을 보여주는 페이지로 이동
  - 페이지 뒤로가기와 앞으로 가기 지원
