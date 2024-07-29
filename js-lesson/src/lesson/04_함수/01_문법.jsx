import React from "react";

function Index0401() {
  // 사용
  function sayHello() {
    return "Hello";
  }

  function sayHelloToFriend(name) {
    return "Hello, " + name;
  }

  function sum(a, b) {
    return a + b;
  }

  return (
    <div>
      <div id="lesson-title">함수 - 문법</div>
      <div id="lesson-content">
        <div>유사한 동작을 하는 코드가 여러 곳에서 필요한 경우 사용</div>
        <div>덕분에 중복 없이 유사한 동작을 하는 코드를 여러번 호출 가능</div>
        <div>
          ex: 상품의 무게와 고객의 나라, postal code를 입력 받아서 배송 운임료를 계산하는 함수
        </div>
        <a href="https://half-straw-a69.notion.site/05-Function-14aa963efacb4bf1a5365906a84f1300?pvs=4">
          이론 자료
        </a>

        <div className="title">사용</div>
        <div>sayHello()의 실행 결과: {sayHello()}</div>
        <div>sayHelloToFriend("Kim")의 실행 결과: {sayHelloToFriend("Kim")}</div>
        <div>sum(1, 2)의 실행 결과: {sum(1, 2)}</div>
      </div>
    </div>
  );
}

export default Index0401;
