import React, { useState } from "react";

function Index0201() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <div id="lesson-title">렌더링</div>
      <div id="lesson-content">
        <div className="title">이론</div>
        <a href="https://half-straw-a69.notion.site/02-87f36e12410340ad9c8831333767f4ba?pvs=4">
          이론 자료
        </a>

        <div className="title">렌더링</div>
        <div>[01_상태] 단원에서 알게 모르게 렌더링을 수행하고 있었고,</div>
        <div>단순히 해당 `count` 변수의 증가 값을 웹 페이지에 표현하는 것이</div>
        <div>렌더링이라고 설명할 수 있음</div>

        <div>count: {count}</div>
        <button onClick={() => increment()}>count 증가</button>

        <div className="title">리렌더링</div>
        <div>react로 구현한 웹 페이지는 새로고침과 동시에 해당 페이지의 모든 UI가 렌더링 됨</div>
        <div>이를 `초기 렌더링` 혹은 `마운트` 라고 부름</div>
        <div>리렌더링이란, `초기 렌더링` 이후 사용자의 어떤 상호작용 (버튼 클릭 등)에 따라</div>
        <div>부분적으로 렌더링이 일어나는 것을 의미함</div>

        <div className="title">조건부 렌더링</div>
        <div>앞서 배운 if 문법, `?` 삼항 연산자를 통해 조건부 렌더링을 수행할 수 있음</div>
        <div>예를 들어, useState로 선언한 상태 값에 따라서</div>
        <div>
          어떠한 조건을 설정 후, 조건이 참이라면 렌더링하고 거짓이라면 렌더링 하지 않을 수 있음
        </div>
        <div>ex: 로그인한 사용자에게만 보여지는 페이지 등</div>
      </div>
    </div>
  );
}

export default Index0201;
