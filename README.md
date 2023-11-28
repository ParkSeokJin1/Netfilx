# 넷플릭스 클론코딩

https://netfilx-rho.vercel.app/

넷플릭스 페이지를 보고 클론코딩 을 한 프로젝트 입니다. (추가 업데이트 예정)



<br>

📌 Point

✔ Animations

✔ Sliders

✔ Modals

<br>


## Skills & Tools 🛠

✔ React.js

✔ recoil

✔ react-router

✔ react-query

✔ react-hook-form

✔ styled-components

✔ framer-motion

✔ react-icons

<br>

## API

- [x] [TMDB](https://developers.themoviedb.org/3)

<br/>

📅 기간 : 2023. 10. 20 ~ 2023. 10. 27

### npm install framer-motion 사용

사용하면 좋은 점:
framer Motion 세계에서, 그 값들은, motionValue는
react 세계에 속하지 않는다.
box를 움직임에도 컴포넌트는 재 렌더링 되지 않는다.

### 1.넷플릭스 로고 위에 마우스를 가져다 대면 반복되는 애니메이션 적용(svg 색상 변경)



### 2. 어디에 있는지에 따라 ex) Home이나 Tv show에 있다면 내가 어디 있는지를 나타내기 위해 동그라미 적용
( useMatch 사용해서 circle을 보여주도록 적용 ), layoutId를 사용해서 동그라미가 옮겨 다니도록 애니메이션 추가



### 3. 검색창 이미지를 누르면 input을 보여주기.

(animate를 사용해 x축으로 이동)
useAnimation 사용해서 애니메이션을 다른 곳에서부터 실행시키고 있다.
코드로부터 애니메이션을 실행 -> 애니메이션을 실행시키는 또 하나의 방법
애니메이션을 동시에 실행시키고 싶을 때 유용하고 중요하다.

### 4. 스크롤을 내리면 헤더의 색을 변경하기.
useViewportScroll 사용
모션 값을 준다. 모션 값은 스크롤을 움직일 때 제일 밑에서부터 얼마나 멀리 있는지를 알려준다.

### 5. a 태그 말고 Link를 쓰는 이유
같은 웹사이트로 갈 계획이기 때문에 도메인이 같을 땐 a를 쓰지 않는다.
a 태그는 페이지를 새로고침할 거고 원하는 동작을 수행하지 못한다.

### 6.framer-motion 사용해서 slider 구현
Animate Presence는 컴포넌트가
render 되거나 destroy 될 때 효과를 줄 수 있다.

### 7.transform-origin: center right, left 속성을 사용
해서 첫 번째 포스터와 마지막 포스터를
마우스를 올렸을 때 화면에서 잘리지 않게 커지도록 구현.

### 8.포스터 클릭했을시 모달창을 layout id로 구현

layout id는 두 개의 다른 div를 연결하고, framer motion이 두 div 사이를 애니메이션으로 연결할 수 있도록 해주는 도구

### 9.검색창에 "react-hook-form 사용
react-hook-form 을 사용하면 데이터를 검증하는 function을 준다.
검증한 뒤에, 우리가 만든 function을 호출해서 그 데이터를 가지고 뭔가를 할 수 있다.

const onValid = (data: IForm) => {
navigate(`/search? keyword=${data.keyword}`);
};

