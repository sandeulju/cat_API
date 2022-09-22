import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { catCategory, catSpecies } from "../../../recoil";
import { HomePage } from "../../page/home/HomePage";
import { Layout } from "../../Layout/Layout";
import HeaderDiv from "../../Header/HeaderDiv";

// 이미지도 삽입하고 싶은데 방법이 텍스트 데이터 불러오는것과 같은지...? 다른지 모르겠어서 일단 주석처리 하였습니다
// const catImage = atom({
//   key: "Image",
//   default: "",
// });

const HomeContainer = () => {
  return (
    <>
      <Layout className={"is-primary"}>
        <HeaderDiv />
      </Layout>

      <Layout>
        <HomePage />
      </Layout>
    </>
  );
};

export default HomeContainer;
