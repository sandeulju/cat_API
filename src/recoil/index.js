// Recoil의 atoms, selector 관련 코드는 전부 이곳에 기재함

import { atom, selector } from "recoil";
import { catApi, dogApi } from "../api";

export const catDataState = atom({
  key: "catDataStates",
  default: [],
  // 값이 배열로 들어오므로 default는 빈 배열로 하는걸 추천!
});

// selectors는 상태를 기반으로 하는 파생 데이터를 계산하는데 사용된다(순수 함수) - 쓸모없는 상태의 보존을 방지
export const catDataStateSelecter = selector({
  key: "catDataState",
  get: async ({ get }) => {
    const res = await catApi(52);

    return res.data;
    // async 부분이 비동기 처리되고 await 부분이 동기 처리!
    // 여기서 res에 데이터인 catApi를 불러와서 할당하고,
    // selector로 상태를 기반으로 하는 파생 데이터를 계산한다. 여기서는 50을 할당해 주고, res.data를 저장하였다.
    // 그리고 export한 catDataStateSelector를 CatContainer.jsx의 catApis에 useRecoilValueLoadable 사용해서 등록했다.
  },
});

// dog start

export const dogDataState = atom({
  key: "dogDataStates",
  default: [],
});

export const dogDataStateSelecter = selector({
  key: "dogDataState",
  get: async ({ get }) => {
    const res = await dogApi(50);

    return res.data;
  },
});
