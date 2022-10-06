import { useState, useEffect } from "react";

// https://react.vlpt.us/basic/10-useRef.html

const addList = () => {};

const TodoCreate = () => {
  return (
    <div className="todo-input-wrap">
      <input
        className="todo-input"
        type="text"
        placeholder="오늘의 할일을 입력해주세요!"
      />
      <input
        className="todo-submit"
        type="button"
        value={"제출"}
        onClick={addList}
        // onClick에 함수 넣을 때 실행시키면 안됨!!!!!!
      />
    </div>
  );
};

export default TodoCreate;
