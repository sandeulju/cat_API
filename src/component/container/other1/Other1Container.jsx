import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useState, useEffect } from "react";
import { Layout } from "../../Layout/Layout";
import HeaderDiv from "../../Header/HeaderDiv";

const Other1Container = () => {
  return (
    <>
      <Layout className={"is-primary"}>
        <HeaderDiv />
      </Layout>

      <Layout>
        <div className="todo-all-wrap">
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

          <div className="todo-input-wrap">
            <input type="text" placeholder="오늘의 할일을 입력해주세요!" />
            <input type="submit" />
          </div>

          <div className="todo-list-all-wrap">
            <div className="todo-list-top-wrap">
              <p className="todo-list-title">Just Do It!</p>
              <p className="todo-list-state">현재 {}개의 스케줄이 있습니다</p>
            </div>

            <div className="todo-list-ul-wrap">
              <p className="todo-list-title">진행 예정</p>
              <ul className="todo-list">
                <li>진행 예정인 스케줄이 아직 없습니다.</li>
              </ul>
            </div>

            <div className="todo-list-ul-wrap">
              <p className="todo-list-title">진행 중</p>
              <ul className="todo-list">
                <li>진행 중인 스케줄이 아직 없습니다.</li>
              </ul>
            </div>

            <div className="todo-list-ul-wrap">
              <p className="todo-list-title">완료</p>
              <ul className="todo-list">
                <li>완료된 스케줄이 아직 없습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Other1Container;
