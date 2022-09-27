import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useState, useEffect } from "react";
import { Layout } from "../../Layout/Layout";
import HeaderDiv from "../../Header/HeaderDiv";

const Other1Container = () => {
  return (
    <>
      <Layout className={"is-primary"}>
        <HeaderDiv />
      </Layout>

      <Layout>other1</Layout>
    </>
  );
};

export default Other1Container;
