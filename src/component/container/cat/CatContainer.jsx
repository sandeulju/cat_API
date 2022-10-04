import "./style.css";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useEffect } from "react";
import { catDataState, catDataStateSelecter } from "../../../recoil/index";
import { Layout } from "../../Layout/Layout";
import HeaderDiv from "../../Header/HeaderDiv";
import { useState } from "react";
import Loading from "./Loading";
import HasError from "./HasError";
import CatModalBasic from "./CatModal/CatModalBasic";
// 코드 경로 줄이는 법 : 필요한 함수를 index.js 안에 넣고 전부 거기서 import 하기(모든 경로가 index에서 시작하는 느낌)
// import CatProfile from "./CatProfile";
// import { ProfileBackground } from "./Styles";
// 상단 import 부분은 단축키 사용하고 신경쓰지말기(ctrl + space)

const CatContainer = () => {
  // API Hook
  const catApis = useRecoilValueLoadable(catDataStateSelecter);
  const [content, setContent] = useRecoilState(catDataState);

  // Loading, Error Hook
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(true);

  // Modal Hook
  const [catId, setCatId] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  // let contentArrayIndex = 0;
  // const [imgUrl, setImgUrl] = useState();

  const showModal = (id) => {
    setCatId(id);
    setModalOpen(true);
  };

  // useEffect(() => {
  //   console.log("로그테스트", modalOpen);
  // }, [modalOpen]);
  // https://recoiljs.org/docs/api-reference/core/Loadable 참고했음
  // 핵심내용 발췌 : state: 원자 또는 선택기의 현재 상태입니다. 가능한 값은 'hasValue', 'hasError'또는 'loading'입니다.
  // 이 상태에서 catApis를 console에 찍으면 state(hasValue, hasError, loading 셋 중 하나가 뜸),
  // contents(데이터!!!!) 요소를 포함하고 있는 ValueLoadable 객체가 뜬다.
  // 따라서 체인으로 연결해서 contents에 접근해 데이터를 활용하면 된다.
  // catDataStateSelelctor는 index.js에서 selector를 활용하였다. 그렇게 비동기를 사용해 값을 로드하고 할당한건가..? 이거도 내일 정리 필요.

  // console.log(catApis);

  // 여기서 구현한 것(useEffect와 useRecoilValueLoadable을 사용) 처럼 구현하지 않는다면?(API를 직접 사용한다면)
  // 해당 코드처럼 구현하기
  // async example = () => {
  //   console.log("1번");
  //     await catApi.then((res) => {
  //       console.log("2번");
  //     }).catch((err) => {
  //       console.log("3번");
  //     }).finally(() => {
  //       console.log("4번");
  //     })
  //   console.log("5번");
  // }
  // Error 안나면? -> 1 - 5 - 2 - 4
  // Error 나면? -> 1 - 5 - 3 - 4
  // finally 엔간해선 써주기(굳이 쓸 필요없다면 X)

  // useEffect(() => {
  //   setImgUrl(catApis.contents[contentArrayIndex].url);
  //   setContent(catApis.contents);
  // }, []);

  // 배열의 index를 증감시키며 slide하기
  // img 데이터 위치 = content.url

  // let contentArrayIndex = 0;
  // const selectArrayImage = content[contentArrayIndex];
  // console.log(selectArrayImage);

  // const increaseIndex = () => {
  //   console.log("increase :::", content[contentArrayIndex]);

  //   ++contentArrayIndex;

  //   setImgUrl(content[contentArrayIndex].url);

  //   console.log("increase after:::", content[contentArrayIndex]);
  // };

  // const decreaseIndex = () => {
  //   console.log("decrease :::", content[contentArrayIndex].url);

  //   --contentArrayIndex;

  //   setImgUrl(content[contentArrayIndex].url);

  //   console.log("decrease after :::", content[contentArrayIndex].url);
  // };

  useEffect(() => {
    // useEffect 라이프사이클 참조 - 렌더링이 완료되자마자 실행된다! 그래서 useEffect를 사용함.
    if (catApis.state === "hasValue") {
      // setImgUrl(catApis.contents[contentArrayIndex].url);
      setContent(catApis.contents);
      setLoading(false);
      setError(false);
      // setContent에 catApis.contents를 넣어줘 값을 set 해준다.
    } else if (catApis.state === "hasError") {
      setError(true);
      setLoading(false);
      return;
    } else if (catApis.state === "loading") {
      setLoading(true);
      setError(false);
      return;
    }
    // if문으로 상태에 따라서 setContent를 수정할지 아닐지 분기처리해준다.
  }, [catApis]);

  // console.log(catApis);
  // console.log(content);

  // 그냥 단순히 원시값 변경시키는 작업(ex> boolean)은 useState 쓰지 않아도 됨
  // 계속 값이 변경되거나 하는 값을 다룰때 사용

  return (
    <>
      <Layout className={"is-primary"}>
        <HeaderDiv />
      </Layout>

      <Layout>
        <div style={{ padding: "0 20px" }}>
          {content.map((data) => (
            <div className={"img-wrapper"}>
              <div
                className={"modal-wrapper"}
                onClick={() => showModal(data.id)}
              >
                <div className={"dark-hover"}>
                  <p className={"p-white-hover"}>My ID is {data.id}!!!</p>
                </div>
              </div>
              <img src={data.url} className={"img-style"} alt="고양이 이미지" />
            </div>
          ))}
          {modalOpen && (
            <CatModalBasic catId={catId} setModalOpen={setModalOpen} />
          )}
        </div>
      </Layout>
      {loading === true ? <Loading /> : ""}
      {Error === true ? <HasError /> : ""}
    </>
  );
  // 새로 페이지를 이동하는거니까, return 문 안에 페이지를 구성하는 코드를 첨부터 끝까지() 넣어주었다.

  // {modalOpen && (<CatModalBasic catId={catId} setModalOpen={setModalOpen} />)}
  // 이 코드는 map 안에 넣으면 안된다(밖에 두고 써도 상관 X - 어차피 원하는 div에 onClick만 걸어주면 되니까)
};

export default CatContainer;
