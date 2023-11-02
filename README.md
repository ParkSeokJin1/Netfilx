# 넷플릭스 클론코딩



## npm install framer-motion 사용

사용하면 좋은점:
framer Motion 세계에서, 그 값들은, motionValue 는
react세계에 속하지 않는다.
box를 움직임에도 컴포넌트는 재 랜더링 되지 않는다.

### 1.넷플릭스 로고 위에 마우스를 가져다 대면 반복되는 애니메이션 적용(svg 색상 변경)



### 2. 어디에 있는지에 따라 ex) Home 이나 Tv show 에 있다면 내가 어디있는지를 나타내기 위해 동그라미 적용
( useMatch 사용 해서 circle을 보여주도록 적용 ), layoutId 를 사용해서 동그라미가 옮겨다니도록 애니메이션 추가



### 3. 검색창 이미지를 누르면 input을 보여주기.

(animate를 사용해 x축으로 이동)
useAnimation 사용해서 애니메이션을 다른곳에서부터 실행시키고 있다.
코드로부터 애니메이션을 실행 -> 애니메이션을 실행시키는 또 하나의 방법
애니메이션을 동시에 실행시키고 싶을때 유용하고 중요하다.

### 4. 스크롤을 내리면 헤더의 색을 변경하기.
useViewportScroll 사용
모션값을 준다. 모션값은 스크롤을 움직일 때 제일 밑에서부터 얼마나 멀리 있는지를 알려준다.


