import { useState, useEffect } from "react";

const TodoHeader = () => {
  return (
    <>
      <div className="todo-title-wrap">
        <b className="todo-title">Todo with Recoil state managements</b>
      </div>

      <div className="todo-setmode-wrap">
        <label className="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p>You can switching darkmode!!</p>
      </div>
    </>
  );
};

export default TodoHeader;
