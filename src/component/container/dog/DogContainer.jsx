import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useEffect } from "react";
import { Layout } from "../../Layout/Layout";
import HeaderDiv from "../../Header/HeaderDiv";
import { dogDataState, dogDataStateSelecter } from "../../../recoil";

// 이미지도 삽입하고 싶은데 방법이 텍스트 데이터 불러오는것과 같은지...? 다른지 모르겠어서 일단 주석처리 하였습니다
// const catImage = atom({
//   key: "Image",
//   default: "",
// });

const DogContainer = () => {
  const [content, setContent] = useRecoilState(dogDataState);
  const dogApis = useRecoilValueLoadable(dogDataStateSelecter);

  useEffect(() => {
    if (dogApis.state === "hasValue") {
      return setContent(dogApis.contents);
    } else if (dogApis.state === "hasError") {
      return;
    } else if (dogApis.state === "loading") {
      return;
    }
  }, [dogApis]);

  return (
    <>
      <Layout className={"is-primary"}>
        <HeaderDiv />
      </Layout>

      <Layout>dog</Layout>
      {
        /* {content.map((data) => (
        <img src={data.url} />
      ))} */
        // 주석처럼 하면 화면에 이미지가 50장 쫙 나열된다
      }
    </>
  );
};

export default DogContainer;
