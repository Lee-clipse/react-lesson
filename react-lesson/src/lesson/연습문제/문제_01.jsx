import React, { useState } from "react";

function Index0001() {
  // TODO
  const [todoList, setTodoList] = useState([]);
  const [todoString, setTodoString] = useState("");

  function handleTodoInput(todoInput) {
    setTodoString(todoInput);
  }

  function addTodoList() {
    setTodoList([...todoList, todoString]);
  }

  return (
    <div>
      <div id="lesson-title">문제 1: TODO LIST</div>
      <div id="lesson-content">
        <div className="title">문제</div>
        <div>TODO LIST를 구현하시오.</div>
        <div>할 일을 input 태그로 입력 받을 수 있다.</div>
        <div>입력 받은 할 일을 목록에 추가할 수 있다.</div>
        <div>목록은 화면에 렌더링된다.</div>

        <div className="title">답</div>
        <h3>할 일 목록</h3>
        <div>
          {todoList.map((todo) => {
            return <div>할 일: {todo}</div>;
          })}
        </div>
        <input
          type="text"
          placeholder="할 일"
          onChange={(event) => handleTodoInput(event.target.value)}
        />
        <div className="link-button" onClick={() => addTodoList()}>
          할 일 추가
        </div>
      </div>
    </div>
  );
}

export default Index0001;
