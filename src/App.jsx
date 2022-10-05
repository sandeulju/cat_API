// import logo from "./logo.svg";
import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import HomeContainer from "./component/container/home/HomeContainer";
import CatContainer from "./component/container/cat/CatContainer";
import DogContainer from "./component/container/dog/DogContainer";
import Other1Container from "./component/container/other1/pages/Other1Container";
import Other2Container from "./component/container/other2/Other2Container";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/dog" element={<DogContainer />} />
      <Route path="/cat" element={<CatContainer />} />
      <Route path="/other1" element={<Other1Container />} />
      <Route path="/other2" element={<Other2Container />} />
    </Routes>
  );
  // Route를 활용해 라우팅 해주고, 링크가 실제 쓰이는 부분인 HeaderDiv로 가서
  // NavLink의 to 와 const로 문서 앞부분에 선언한 onClick의 navigation과 대응하여 연동해준다. 그럼 라우팅 완료!
}

export default App;
