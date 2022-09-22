import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useEffect } from "react";
import { catDataState, catDataStateSelecter } from "../../../recoil";
import { Layout } from "../../Layout/Layout";
import HeaderDiv from "../../Header/HeaderDiv";
// 상단 import 부분은 단축키 사용하고 신경쓰지말기(ctrl + space)

// 이미지도 삽입하고 싶은데 방법이 텍스트 데이터 불러오는것과 같은지...? 다른지 모르겠어서 일단 주석처리 하였습니다
// const catImage = atom({
//   key: "Image",
//   default: "",
// });

const CatContainer = () => {
  const [content, setContent] = useRecoilState(catDataState);
  const catApis = useRecoilValueLoadable(catDataStateSelecter);
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
      return setContent(catApis.contents);
      // setContent에 catApis.contents를 넣어줘 값을 set 해준다.
    } else if (catApis.state === "hasError") {
      return;
    } else if (catApis.state === "loading") {
      return;
    }
    // if문으로 상태에 따라서 setContent를 수정할지 아닐지 분기처리해준다.
  }, [catApis]);

  console.log(content);
  return (
    <>
      <Layout className={"is-primary"}>
        <HeaderDiv />
      </Layout>

      <Layout>cat</Layout>
    </>
  );
  // 새로 페이지를 이동하는거니까, return 문 안에 페이지를 구성하는 코드를 첨부터 끝까지() 넣어주었다.
};

export default CatContainer;
