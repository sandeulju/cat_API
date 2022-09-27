import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useState, useEffect } from "react";
import { Layout } from "../../Layout/Layout";
import HeaderDiv from "../../Header/HeaderDiv";

const Other2Container = () => {
  return (
    <>
      <Layout className={"is-primary"}>
        <HeaderDiv />
      </Layout>

      <Layout>other2</Layout>
    </>
  );
};

export default Other2Container;
