import { useState, useEffect } from "react";
import ListItem from "./ListItem";

const TodoList = ({ title, todoList, setTodoList }) => {
  return (
    <>
      <div className="todo-list-ul-wrap">
        {/* props로 부터 title 값을 전달 받음 */}
        <b className="todo-list-title">{title}</b>
        <ul className="todo-list-ul">
          {todoList && // todoList가 있을때만 출력
            todoList.map((todoItem) => (
              // map을 이용하여 TodoItem을 출력
              <ListItem
                key={todoItem.id}
                todoItem={todoItem}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            ))}
        </ul>
        <p className="todo-list-state">
          {title}
          {title === "완료" ? "된" : "인"} 스케줄이 아직 없습니다.
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
