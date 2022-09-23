// Loading.js
import React from "react";
import { Background, LoadingText } from "./Styles";
import Spinner from "../../../../public/images/spinner.gif";

const Loading = () => {
  return (
    <Background>
      <img src={Spinner} alt="로딩중" width="5%" />
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
    </Background>
  );
};

export default Loading;
