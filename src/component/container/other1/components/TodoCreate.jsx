import { useState, useEffect } from "react";

const TodoCreate = () => {
  return (
    <div className="todo-input-wrap">
      <input
        className="todo-input"
        type="text"
        placeholder="오늘의 할일을 입력해주세요!"
      />
      <input className="todo-submit" type="submit" />
    </div>
  );
};

export default TodoCreate;
