import { useState, useEffect } from "react";

const TodoList = (props) => {
  return (
    <>
      <div className="todo-list-ul-wrap">
        <b className="todo-list-title">{props.state}</b>
        <ul className="todo-list-ul"></ul>
        <p className="todo-list-state">
          {props.state}
          {props.state === "완료" ? "된" : "인"} 스케줄이 아직 없습니다.
        </p>
      </div>
    </>
  );
};

// const TodoListAll = (props) => {
//   return (
//     <>
//       <TodoList state="진행 예정"></TodoList>
//       <TodoList state="진행 중"></TodoList>
//       <TodoList state="완료"></TodoList>
//     </>
//   );
// };

export default TodoList;
