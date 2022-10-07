import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// https://react.vlpt.us/basic/10-useRef.html

const TodoCreate = ({ todoList, setTodoList }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null); // (1) useRef() Hook으로 ref 생성

  useEffect(() => {
    // useEffect로 기능 동작 확인 - todoList가 변했을때만 실행
    console.log(todoList);
  }, [todoList]);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {
    // TodoList에 값 추가
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
    });

    setTodoList(nextTodoList);

    // input 값 초기화 및 포커싱
    // (2) 버튼을 클릭했을 때 실행되는 메소드
    setText(""); // (2-1) input 값을 초기화
    inputRef.current.focus(); // (2-2) input으로 포커싱
  };

  return (
    <div className="todo-input-wrap">
      <input
        className="todo-input"
        type="text"
        name="todoItem"
        value={text}
        ref={inputRef} // (3) ref 할당
        placeholder="오늘의 할일을 입력해주세요!"
        onChange={onChangeInput}
      />
      <button
        className="todo-submit"
        type="submit"
        onClick={onClickAddButton} // (4) 버튼을 클릭했을 때, onClickAddButton() 메소드를 실행한다.
        // onClick에 함수 넣을 때 실행시키면 안됨!!!!!!
      >
        추가
      </button>
    </div>
  );
};

// props 값 검증
TodoCreate.propTypes = {
  todoList: PropTypes.arrayOf(
    // (3) 위에서 설치한 prop-types를 이용하여 props의 타입을 강제한다. todoList는 배열이어야 함
    PropTypes.shape({
      // (3-1) todoList의 원소는 객체(object)이어야 함
      id: PropTypes.number.isRequired, // (3-2) id는 숫자여야 함
      text: PropTypes.string.isRequired, // (3-3) text는 문자열이어야 함
    }).isRequired
  ),
  setTodoList: PropTypes.func.isRequired, // (4) setTodoList는 함수여야 함
};

export default TodoCreate;
