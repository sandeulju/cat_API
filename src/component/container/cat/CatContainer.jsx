import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useEffect } from "react";
import { catDataState, catDataStateSelecter } from "../../../recoil/index";
import { Layout } from "../../Layout/Layout";
import HeaderDiv from "../../Header/HeaderDiv";
import { useState } from "react";
// 상단 import 부분은 단축키 사용하고 신경쓰지말기(ctrl + space)

const CatContainer = () => {
  const catApis = useRecoilValueLoadable(catDataStateSelecter);
  const [content, setContent] = useRecoilState(catDataState);
  const [imgUrl, setImgUrl] = useState();
  let contentArrayIndex = 0;
  // https://recoiljs.org/docs/api-reference/core/Loadable 참고했음
  // 핵심내용 발췌 : state: 원자 또는 선택기의 현재 상태입니다. 가능한 값은 'hasValue', 'hasError'또는 'loading'입니다.
  // 이 상태에서 catApis를 console에 찍으면 state(hasValue, hasError, loading 셋 중 하나가 뜸),
  // contents(데이터!!!!) 요소를 포함하고 있는 ValueLoadable 객체가 뜬다.
  // 따라서 체인으로 연결해서 contents에 접근해 데이터를 활용하면 된다.
  // catDataStateSelelctor는 index.js에서 selector를 활용하였다. 그렇게 비동기를 사용해 값을 로드하고 할당한건가..? 이거도 내일 정리 필요.

  // console.log(catApis);

  useEffect(() => {
    // useEffect 라이프사이클 참조 - 렌더링이 완료되자마자 실행된다! 그래서 useEffect를 사용함.
    if (catApis.state === "hasValue") {
      setImgUrl(catApis.contents[contentArrayIndex].url);
      setContent(catApis.contents);
      // setContent에 catApis.contents를 넣어줘 값을 set 해준다.
    } else if (catApis.state === "hasError") {
      return;
    } else if (catApis.state === "loading") {
      return;
    }
    // if문으로 상태에 따라서 setContent를 수정할지 아닐지 분기처리해준다.
  }, [catApis]);

  console.log(catApis.state);
  console.log(content);

  // 배열의 index를 증감시키며 slide하기
  // img 데이터 위치 = content.url

  // let contentArrayIndex = 0;
  // const selectArrayImage = content[contentArrayIndex];
  // console.log(selectArrayImage);

  const increaseIndex = () => {
    ++contentArrayIndex;
    // alert(contentArrayIndex);
    setImgUrl(content[contentArrayIndex].url);
    // if (contentArrayIndex > content.length) {
    //   return (contentArrayIndex = 0);
    // } else if (contentArrayIndex <= content.length) {
    //   return contentArrayIndex;
    // }
  };

  const decreaseIndex = () => {
    --contentArrayIndex;
    setImgUrl(content[contentArrayIndex].url);
    // alert(contentArrayIndex);
    // if (contentArrayIndex < 0) {
    //   return (contentArrayIndex = content.length);
    // } else if (contentArrayIndex >= 0) {
    //   return contentArrayIndex;
    // }
  };

  const hasValueMode = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="button is-primary is-outlined"
          onClick={decreaseIndex}
        >
          prev
        </button>
        <img
          src={imgUrl}
          alt="고양이 이미지"
          style={{
            width: "500px",
            maxHeight: "600px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        />
        <button
          className="button is-primary is-outlined"
          onClick={increaseIndex}
        >
          next
        </button>
      </div>
    );
  };

  const LoadingMode = () => {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  };

  const hasErrorMode = () => {
    return <></>;
  };

  return (
    <>
      <Layout className={"is-primary"}>
        <HeaderDiv />
      </Layout>

      <Layout></Layout>
    </>
  );
  // 새로 페이지를 이동하는거니까, return 문 안에 페이지를 구성하는 코드를 첨부터 끝까지() 넣어주었다.
};

export default CatContainer;
