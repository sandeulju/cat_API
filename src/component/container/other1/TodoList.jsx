import { useState, useEffect } from "react";

const TodoList = () => {
  return (
    <>
      <div className="todo-list-ul-wrap">
        <b className="todo-list-title">진행 예정</b>
        <ul className="todo-list-ul"></ul>
        <p className="todo-list-state">진행 예정인 스케줄이 아직 없습니다.</p>
      </div>
    </>
  );
};

export default TodoList;
