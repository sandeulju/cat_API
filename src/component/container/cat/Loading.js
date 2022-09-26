// Loading.js
import React from "react";
import { Background, LoadingText } from "./Styles";
import Spinner from "../../../images/DoubleRing_spinner.gif";

const Loading = () => {
  return (
    <Background>
      <img src={Spinner} alt="로딩중" width="5%" />
      <LoadingText>Loading...</LoadingText>
    </Background>
  );
};

export default Loading;
