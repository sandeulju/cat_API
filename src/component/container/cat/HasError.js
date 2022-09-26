import React from "react";
import { ErrorBackground, ErrorText } from "./Styles";
import ErrorImage from "../../../images/sign-error-icon.png";

const HasError = () => {
  return (
    <ErrorBackground>
      <img src={ErrorImage} alt="Error" width="5%" />
      <ErrorText>Sorry, Error is Occured :(</ErrorText>
    </ErrorBackground>
  );
};

export default HasError;
