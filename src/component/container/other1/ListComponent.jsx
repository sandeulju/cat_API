import { useState, useEffect } from "react";

const ListComponent = () => {
  return (
    <>
      <li className="todo-list-li">
        <p>
          투두리스트 만들기 <span>진행 예정</span>
        </p>
        <button className="todo-list-li-button" type="submit">
          진행중
        </button>
        <button className="todo-list-li-button" type="submit">
          완료
        </button>
      </li>
    </>
  );
};

export default ListComponent;
