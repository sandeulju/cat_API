import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useState, useEffect } from "react";
import { Layout } from "../../Layout/Layout";
import HeaderDiv from "../../Header/HeaderDiv";
import "./style.css";

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
            <input
              className="todo-input"
              type="text"
              placeholder="오늘의 할일을 입력해주세요!"
            />
            <input className="todo-submit" type="submit" />
          </div>

          <div className="todo-list-all-wrap">
            <div className="todo-list-ul-wrap">
              <b className="todo-list-title">Just Do It!</b>
              <p className="todo-list-state">현재 {}개의 스케줄이 있습니다</p>
            </div>

            <div className="todo-list-ul-wrap">
              <b className="todo-list-title">진행 예정</b>
              <ul className="todo-list-ul">
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
              </ul>
              <p className="todo-list-state">
                진행 예정인 스케줄이 아직 없습니다.
              </p>
            </div>

            <div className="todo-list-ul-wrap">
              <b className="todo-list-title">진행 중</b>
              <ul className="todo-list-ul"></ul>
              <p className="todo-list-state">
                진행 중인 스케줄이 아직 없습니다.
              </p>
            </div>

            <div className="todo-list-ul-wrap">
              <b className="todo-list-title">완료</b>
              <ul className="todo-list-ul"></ul>
              <p className="todo-list-state">완료된 스케줄이 아직 없습니다.</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Other1Container;
